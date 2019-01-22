import React from 'react'
import Routes from './Routes'
import Header from './Header'
import GlobalStyle from './GlobalStyle'
import { BrowserRouter } from 'react-router-dom'

const Application = () => {
    return (
        <BrowserRouter>
            <div>
                <GlobalStyle />
                <Header />
                <Routes />
            </div>
        </BrowserRouter>
    )
}

export default Application
