import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import CvForm from './pages/Cvform';

const RouteList = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/contact' exact component={Contact} />
            <Route path="/about" exact component={About} />
            <Route path="/request-cv" exact component={CvForm} />
        </Switch>
    )
}

export default RouteList;