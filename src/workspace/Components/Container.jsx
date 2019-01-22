import React from 'react'
import Container from '../../components/Container'
import Heading from '../../components/Heading'

const ContainerSample = () => {
    return (
        <div>
            <Container>
                <Heading>Container</Heading>
            </Container>
            <Container style={{ backgroundColor: '#F5B700' }}>
                <div style={{ height: 300, backgroundColor: '#F9D773' }}>
                    <Heading h2>Default Container</Heading>
                </div>
            </Container>
            <Container fullVertical style={{ backgroundColor: '#008BF8' }}>
                <div style={{ height: 300, backgroundColor: '#5CB5FA' }}>
                    <Heading h2>Full Vertical Container</Heading>
                </div>
            </Container>
            <Container full small style={{ backgroundColor: '#71CF00' }}>
                <div style={{ height: 300, backgroundColor: '#D4FDA2' }}>
                    <Heading h2>Full Small Container</Heading>
                </div>
            </Container>
        </div>
    )
}

export default ContainerSample
