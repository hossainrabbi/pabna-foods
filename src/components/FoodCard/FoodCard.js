import React from 'react';
import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './FoodCard.css';

const FoodCard = ({ meal }) => {
    let history = useHistory();

    const { idMeal, strMeal, strMealThumb } = meal;

    const handleClick = () => {
        history.push(`/food/${idMeal}`);
    };

    return (
        <Card className="Food-Card" onClick={handleClick}>
            <Card.Img variant="top" src={strMealThumb} />
            <h4 className="ml-2 mt-2">{strMeal}</h4>
        </Card>
    );
};

export default FoodCard;
