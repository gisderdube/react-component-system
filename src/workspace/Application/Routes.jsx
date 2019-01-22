import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Components from '../Components'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" component={Components} />
            </Switch>
        )
    }
}

export default Routes
