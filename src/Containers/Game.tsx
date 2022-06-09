import React from "react";
import {
  Text,
  Button,
  Grid,
  GridItem,
  Container,
  HStack,
  Heading,
  Box
} from "@chakra-ui/react";
import axios from "axios";
import shortid from 'shortid';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { selectDeck, updateDeckId } from '../app/Reducers/deckSlice';
import { updateHand, selectHand, } from '../app/Reducers/handSlice';
import { updateScore, selectScore } from '../app/Reducers/scoreSlice';
import { removeExtraHands, selectPreviousHands, updatePreviousHands} from '../app/Reducers/previousHandsSlice';
import getHandDetails from "../utils/scoreHand";
import { Cards } from "../app/Reducers/handSlice";
import Card from '../components/Card';
import PreviousHands from "../components/PreviousHands";

const Game = (): JSX.Element => {
  const deckId = useAppSelector(selectDeck)
  const currentHand = useAppSelector(selectHand)
  const currentScore = useAppSelector(selectScore)
  const pastHands = useAppSelector(selectPreviousHands)
  const dispatch = useAppDispatch();
    

  const getDeck = () => {
    axios.get('https://deckofcardsapi.com/api/deck/new/')
    .then(function (response) {
     dispatch(updateDeckId(response.data.deck_id))
    })
    .catch( function (error) {
      console.log('error', error)
    })
  }

  const shuffleDeck = () => {
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`)
    .then(function () {
      return
    })
    .catch( function (error) {
      console.log('error', error)
    })
  }

  const drawHand = () => {
    axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=5`)
    .then(function (response) {
     dispatch(updateHand(response.data.cards))
     const cardsToScore: string[] = []
     response.data.cards.forEach((element: Cards) => {
       cardsToScore.push(element.code);
     });
     const newScore = getHandDetails(cardsToScore)
     dispatch(updateScore(newScore))
     if(pastHands.length === 10) dispatch(removeExtraHands())
     const oldHand: any = [response.data.cards, {score: {newScore}}]
     dispatch(updatePreviousHands(oldHand))
     if(response.data.remaining < 5) shuffleDeck()
    })
    .catch( function (error) {
      console.log('error', error)
    })
  }

  return (
    <>
    <section className='buttons'>
      <Container centerContent pb='20px' pt='20px'>
      <HStack spacing='20px'>
        <Button onClick={getDeck}>
          Get New Deck
        </Button>
        <Button onClick={shuffleDeck} isDisabled={!deckId}>
          Shuffle
        </Button>
        <Button onClick={drawHand} isDisabled={!deckId}>
          Draw
        </Button>
      </HStack>
      </Container>
    </section> 
    <section className='hand'>
      <Container centerContent pb='20px'>
     {currentHand[0] && (
        <Box display='flex' flexDirection='column' alignItems='center' borderWidth='1px' borderRadius='lg' p={2} width={{base: '400px', md: '825px'}}>
          <Heading as='h5' size='lg' pb='20px'>Current Hand:</Heading>
          <Grid templateColumns='repeat(5, 1fr)' gap={6} pb='20px'> 
          {currentHand.map((el) => (
            <GridItem key={shortid.generate()}> 
              <Card key={shortid.generate()} image={el.image}/>
            </GridItem>
          ))}
          </Grid>
          <Text pb='20px'>Score: {currentScore}</Text>
        </Box>
      )}
      </Container>
    </section>
    <section className='previous-hands'>
    <Container centerContent pb='20px'>
     {pastHands[0] && (
        <Box display='flex' flexDirection='column' alignItems='center' borderWidth='1px' borderRadius='lg' p={2} width={{base: '400px', md: '825px'}}>
          <Heading as='h5' size='lg' pb='20px'>Previous Hands:</Heading>
          <Grid templateColumns='repeat(10, 1fr)' gap={6}> 
          {pastHands.map((el: Cards, index: number) => (
              <GridItem key={shortid.generate()} colSpan={{base: 5, md: 2 }}> 
              <PreviousHands key={shortid.generate()} cardsArray={pastHands[index][0]} score={pastHands[index][1]}/>
            </GridItem>
          ))}
          </Grid>
        </Box>
      )}
      </Container>
    </section>
    </>
  );
};

export default Game;
