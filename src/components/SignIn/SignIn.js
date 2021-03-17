import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import {
    googleProvider,
    facebookProvider,
    githubProvider,
    handleSignIn,
    initializeLogInFrameWork,
} from '../Firebase/Firebase';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faGithub,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import './SignIn.css';

initializeLogInFrameWork();

const SignIn = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);

    const { error, success } = loggedInUser;

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: '/' } };

    const googleSignIn = () => {
        handleSignIn(googleProvider)
            .then((res) => {
                handleResponse(res);
            })
            .catch((err) => {
                alert(err.error);
            });
    };

    const facebookSignIn = () => {
        handleSignIn(facebookProvider)
            .then((res) => {
                handleResponse(res);
            })
            .catch((err) => {
                alert(err.error);
            });
    };

    const githubSignIn = () => {
        handleSignIn(githubProvider)
            .then((res) => {
                handleResponse(res);
            })
            .catch((err) => {
                alert(err.error);
            });
    };

    const handleResponse = (res) => {
        SetLoggedInUser(res);
        history.replace(from);
    };

    return (
        <Container>
            <div className="social-signin">
                <button
                    className="d-block w-100 text-white p-2 my-2 border-0"
                    onClick={googleSignIn}
                    style={{ backgroundColor: '#4285F4' }}
                >
                    <FontAwesomeIcon
                        icon={faGoogle}
                        style={{ marginRight: '10px' }}
                    />
                    Sign In With Google
                </button>
                <button
                    className="d-block w-100 text-white p-2 my-2 border-0"
                    onClick={facebookSignIn}
                    style={{ backgroundColor: '#1095F4' }}
                >
                    <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ marginRight: '10px' }}
                    />
                    Sign In With Facebook
                </button>
                <button
                    className="d-block w-100 text-white p-2 my-2 border-0"
                    onClick={githubSignIn}
                    style={{ backgroundColor: '#24292D' }}
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{ marginRight: '10px' }}
                    />
                    Sign In with GitHub
                </button>
                <p className="text-center">
                    {error && <small>Cannot log in</small>}
                    {success && <small>User log in Successfully</small>}
                </p>
            </div>
        </Container>
    );
};

export default SignIn;
