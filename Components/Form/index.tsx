import React from 'react'
import Button from '../Button'
import {Container,BoxContainer,ContainerName,Label,InputContainer,Input, ContainerButton} from './styles'

export default function Form() {

    return(
     <Container>

         <BoxContainer>

            <ContainerName>
                <Label> Full Name</Label>
            </ContainerName>

            <InputContainer>
                <Input/>
            </InputContainer>

         </BoxContainer>


         <BoxContainer>
             <ContainerName>
                 <Label>E-mail</Label>
             </ContainerName>

             <InputContainer>
                <Input/>
             </InputContainer>
             
        </BoxContainer>
     

        <ContainerButton>
            <Button name = 'save'/>
       
        </ContainerButton>
 
     </Container>
    )
}

