import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import {
    handleGoogleSignIn,
    initializeLogInFrameWork,
} from '../Firebase/Firebase';

initializeLogInFrameWork();

const SignIn = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);

    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        photo: '',
        success: false,
        error: '',
    });

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then((res) => {
                setUser(res);
                SetLoggedInUser(res);
                history.replace(from);
            })
            .catch((err) => {
                setUser(err);
            });
    };

    return (
        <div>
            <button onClick={googleSignIn}>Sign In Google</button>
        </div>
    );
};

export default SignIn;
