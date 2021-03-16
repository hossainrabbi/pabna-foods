import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.isSignIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/signin',
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
