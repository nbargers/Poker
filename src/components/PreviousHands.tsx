import React from 'react'
import {
    Modal,
    Text,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Container,
    Grid,
    GridItem,
    HStack
  } from '@chakra-ui/react'
  import Card from './Card'
  import { Cards } from '../app/Reducers/handSlice'

interface PreviousHandsInterface {
    cardsArray: Cards[],
    score: {score: {newScore: string}}
}

const PreviousHands = ({cardsArray, score}: PreviousHandsInterface): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure()

 return (
    <>
      <Button onClick={onOpen}> 
      <HStack spacing={1}> 
         {cardsArray.map((el, index) => (
            <Text key={index}>
             {el.code}
            </Text>
        ))} 
        </HStack>
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Previous Hand</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Container centerContent>    
                <Grid templateColumns='repeat(5, 1fr)' gap={6} mb='20px'> 
                {cardsArray.map((el, index) => (
                    <GridItem key={index}> 
                    <Card key={index} image={el.image}/>
                    </GridItem>
                ))}
                </Grid>
                <Text>Score: {score.score.newScore}</Text>
            </Container>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
 )
}

export default PreviousHands
