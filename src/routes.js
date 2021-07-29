import React from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
} from "react-router-dom";
import ReadingList from './components/ReadingList';
import Book from './components/Book'
import Grid from './components/Grid';
import Category from './components/Category';
import Products from './components/Products';




function Topic() {
    let { topixccId } = useParams();
    return <h3>Reddddddquested topic ID: {topixccId}</h3>;
}

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