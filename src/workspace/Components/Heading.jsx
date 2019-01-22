import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'

const CardSample = () => {
    return (
        <div>
            <Container>
                <Heading>Heading</Heading>
            </Container>
            <Container>
                <Heading>h1 - Heading 1</Heading>
                <Heading h2>h2 - Heading 2</Heading>
                <Heading h3>h3 - Heading 3</Heading>
                <Heading h4>h4 - Heading 4</Heading>
                <Heading h5>h5 - Heading 5</Heading>
            </Container>
        </div>
    )
}

export default CardSample
