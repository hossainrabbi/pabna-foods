import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavManu from './components/NavManu/NavManu';
import Header from './components/Header/Header';
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';

const App = () => {
    return (
        <Router>
            <NavManu />
            <Switch>
                <Route exact path="/">
                    <Header />
                </Route>
                <Route path="/food/:id">
                    <FoodDetails />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
