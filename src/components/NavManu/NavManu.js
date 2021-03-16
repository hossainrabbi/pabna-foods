import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './NavManu.css';

const NavManu = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
    const { isSignIn } = loggedInUser;

    return (
        <>
            <Navbar expand="lg" className="Nav-Manu" sticky="top">
                <Container>
                    <Link to="/" className="navbar-brand">
                        Pabna Foods
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            {isSignIn || (
                                <Link to="/signin" className="nav-link">
                                    Sign in
                                </Link>
                            )}
                            {isSignIn && (
                                <>
                                    <Link to="/profile" className="nav-link">
                                        Profile
                                    </Link>
                                    <Button
                                        className="nav-link"
                                        onClick={() => SetLoggedInUser({})}
                                        style={{
                                            backgroundColor: 'transparent',
                                            border: 'none',
                                        }}
                                    >
                                        Log Out
                                    </Button>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavManu;
