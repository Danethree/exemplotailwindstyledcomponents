import React from 'react'
import {ContainerLogo, ContainerOptions, ContainerOptionsMenu, Nav,Navbar, Options} from './styles'
export default function  Header() {
    return(
        <>
          <Nav>
            <ContainerLogo>
            USER REGISTER.com
            </ContainerLogo>
        </Nav>

        <Navbar>

        <ContainerOptions>
                <ContainerOptionsMenu>
                    <Options href = "/">
                      Register
                    </Options>
                    <Options href = "/">
                 
                        Show Data
                    </Options>
                </ContainerOptionsMenu>
            </ContainerOptions>

        </Navbar>
        </>
      
    )
}