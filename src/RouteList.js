import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';

const RouteList = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' exact component={Contact} />
        </Switch>
    )
}

export default RouteList;