import React from 'react'
import {
 Image
} from '@chakra-ui/react'

interface CardInterface {
    image: string
}

const Card = ({image}: CardInterface) : JSX.Element => {

 return (
   <section className='card'>
     <Image src={image} alt='Card Image' />
   </section>
 )
}

export default Card
