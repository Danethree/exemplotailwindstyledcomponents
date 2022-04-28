import React from 'react'
import { Container } from './styles'
type ButtonProps = {
    name:String
    name2:String
}
export default function Button(props:ButtonProps) {
    return(
        <Container>
            {props.name}
        </Container>
    )
}