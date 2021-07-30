import React from 'react';
import About from './components/About';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import ReadingList from './components/ReadingList';
import Grid from './components/Grid';

export const Routes = () => {
    return (
        <div>
            <Switch>

                <Route exact path="/">
                    <Redirect to="/ReadingList" />
                </Route>
                <Route exact path="/readinglist" component={ReadingList} />
                <Route exact path="/readinglist/:bookId" component={ReadingList} />
                <Route exact path="/about" component={About} />
                <Route exact path="/grid" component={Grid} />

            </Switch>
        </div>
    );
};