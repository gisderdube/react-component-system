import React from 'react'
import Container from '../../components/Container'
import ContainerSample from './Container'
import Flex from './Flex'
import Button from './Button'
import Card from './Card'
import Heading from './Heading'

const Components = () => {
    return (
        <div>
            <ContainerSample />
            <Container style={{ height: 100 }} />
            <Flex />
            <Container style={{ height: 100 }} />
            <Button />
            <Card />
            <Heading />
        </div>
    )
}

export default Components
