import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import Ingredient from '../Ingredient/Ingredient';
import Loading from '../Loading/Loading';
import './FoodDetails.css';

const FoodDetails = () => {
    const [food, setFood] = useState({});
    const [loading, setLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setFood(data.meals[0]);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [id]);

    const {
        strMeal,
        strMealThumb,
        strInstructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
    } = food;

    return (
        <>
            <Container className="Food-Details mt-5">
                <h3 className="food-title main-food-title text-center mb-5">
                    {strMeal}
                </h3>
                <Row>
                    <Col md={6}>
                        <img src={strMealThumb} alt={strMeal} />
                    </Col>
                    <Col md={6}>
                        <ul>
                            <Ingredient
                                strIngredient={strIngredient1}
                                strMeasure={strMeasure1}
                            />
                            <Ingredient
                                strIngredient={strIngredient2}
                                strMeasure={strMeasure2}
                            />
                            <Ingredient
                                strIngredient={strIngredient3}
                                strMeasure={strMeasure3}
                            />
                            <Ingredient
                                strIngredient={strIngredient4}
                                strMeasure={strMeasure4}
                            />
                            <Ingredient
                                strIngredient={strIngredient5}
                                strMeasure={strMeasure5}
                            />
                            <Ingredient
                                strIngredient={strIngredient6}
                                strMeasure={strMeasure6}
                            />
                            <Ingredient
                                strIngredient={strIngredient7}
                                strMeasure={strMeasure7}
                            />
                            <Ingredient
                                strIngredient={strIngredient8}
                                strMeasure={strMeasure8}
                            />
                            <Ingredient
                                strIngredient={strIngredient9}
                                strMeasure={strMeasure9}
                            />
                            <Ingredient
                                strIngredient={strIngredient10}
                                strMeasure={strMeasure10}
                            />
                        </ul>
                    </Col>
                </Row>
                <p className="mt-4">{strInstructions}</p>
            </Container>
            {loading && <Loading />}
        </>
    );
};

export default FoodDetails;
