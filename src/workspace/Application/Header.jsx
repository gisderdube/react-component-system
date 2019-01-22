import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../../components/Container'

const StyledHeader = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const StyledLink = styled(Link)`
    color: #04e762;
    font-weight: 500;
    text-decoration: none;
    font-family: 'Work Sans', sans-serif;
    display: inline-block;
    margin-right: 25px;
`

const Header = () => {
    return (
        <StyledHeader>
            <div>
                <StyledLink style={{}} to="/">
                    Components
                </StyledLink>
            </div>
            <a href="https://dube.io">
                <img src={require('../../assets/logo_dube.png')} alt="" style={{ height: 50 }} />
            </a>
        </StyledHeader>
    )
}

export default Header
