import React from 'react'
import {
 Heading,
 Container,
 Box,
 Text
} from '@chakra-ui/react'

const Header = (): JSX.Element => {

 return (
   <section className='title'>
       <Box display='flex' pt='20px' pb='20px' borderBottom='2px' flexDirection='column'  alignItems='center'>
            <Heading as='h2' pb='20px'>Poker Game</Heading>
            <Text> Draw a new deck, shuffle, and begin playing! </Text>
       </Box>
   </section>
 )
}

export default Header
