import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import "./css/style.css";
import {NavBar, HomeBody, Picture, ProjectOverview} from 'components';

function App(props) {
    return (
        <div>
            <NavBar/>
            <Switch>
                <Route path = "/">
                    <HomeBody/>
                    <Picture/>
                </Route>
            </Switch>
        </div>
    );
}

export default App;