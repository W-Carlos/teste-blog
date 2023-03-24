import React from "react";
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './containers/Home'
import Comments from './containers/Comments';

function Routes(){
    return(
        <Router>
            <Switch>
                <Route exact component={Home} path='/' />
                <Route component={Comments} path='/comentarios/:id' />
            </Switch>
        </Router>
    )
}

export default Routes