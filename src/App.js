import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavManu from './components/NavManu/NavManu';
import Header from './components/Header/Header';
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';
import SignIn from './components/SignIn/SignIn';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

const App = () => {
    const [loggedInUser, SetLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, SetLoggedInUser]}>
            <Router>
                <NavManu />
                <Switch>
                    <Route exact path="/">
                        <Header />
                    </Route>
                    <Route path="/signin">
                        <SignIn />
                    </Route>
                    <PrivateRoute path="/food/:id">
                        <FoodDetails />
                    </PrivateRoute>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </UserContext.Provider>
    );
};

export default App;
