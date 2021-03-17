import React, { useContext } from 'react';
import { Card, Container } from 'react-bootstrap';
import { UserContext } from '../../App';

const cardStyle = {
    maxWidth: '300px',
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
};

const Profile = () => {
    const [loggedInUser, SetLoggedInUser] = useContext(UserContext);
    const { name, email, photo } = loggedInUser;

    return (
        <Container>
            <Card style={cardStyle}>
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <h4>{name}</h4>
                    <p>Email: {email}</p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Profile;
