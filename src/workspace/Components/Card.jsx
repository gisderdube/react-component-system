import React from 'react'
import faker from 'faker'
import Container from '../../components/Container'
import Heading from '../../components/Heading'
import Flex from '../../components/Flex'
import Card from '../../components/Card'

const randomCards = []

for (let i = 0; i < 9; i++) {
    randomCards.push({
        title: faker.lorem.words(2),
        copy: faker.lorem.sentences(3),
    })
}

const CardSample = () => {
    return (
        <div>
            <Container>
                <Heading>Card</Heading>
            </Container>
            <Container>
                <Flex>
                    <Card>
                        <Heading h3>Normal Card</Heading>
                        <p>
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
                            porta gravida at eget metus. Donec sed odio dui.
                        </p>
                    </Card>
                    <Card big>
                        <Heading h3>Big Card</Heading>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed
                            odio dui. Donec id elit non mi porta gravida at eget metus.
                        </p>
                    </Card>
                    <Card primary delay={1500}>
                        <Heading h3 style={{ color: '#fff' }}>
                            Primary Delayed Card
                        </Heading>
                        <p>
                            Nullam quis risus eget urna mollis ornare vel eu leo. Donec id elit non mi
                            porta gravida at eget metus. Donec sed odio dui.
                        </p>
                    </Card>
                </Flex>
            </Container>
            <Container>
                <Heading>Card List</Heading>
                <Flex>
                    {randomCards.map((el, index) => {
                        return (
                            <Card primary key={index} delay={index * 125} style={{ width: '25%' }}>
                                <Heading style={{ color: '#fff' }} h4>
                                    {el.title}
                                </Heading>
                                <p>{el.copy}</p>
                            </Card>
                        )
                    })}
                </Flex>
            </Container>
        </div>
    )
}

export default CardSample
