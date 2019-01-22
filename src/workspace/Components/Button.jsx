import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Button from '../../components/Button'

const ButtonSample = () => {
    return (
        <div>
            <Container>
                <Heading>Button</Heading>
            </Container>
            <Container>
                <Button>Primary Button</Button>
                <Button secondary>Secondary Button</Button>
                <Button inverse>Inverse Button</Button>
                <Button big>Big Primary Button</Button>
                <Button loading>Primary Loading Button</Button>
            </Container>
        </div>
    )
}

export default ButtonSample
