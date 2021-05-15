import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Main from './pages/Main'
import Login from './pages/login'
export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route path="/dev/:id" component={Main}/>
            </Switch>
        </BrowserRouter>
    )
}