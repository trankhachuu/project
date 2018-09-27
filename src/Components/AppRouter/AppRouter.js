import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import Home from '../Home/Home';

class RouterURL extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                </Switch>
            </div>
        );
    }
}

export default RouterURL;