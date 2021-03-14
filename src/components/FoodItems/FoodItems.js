import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FoodCard from '../FoodCard/FoodCard';
import Loading from '../Loading/Loading';

const FoodItems = ({ search }) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((data) => {
                setMeals(data.meals);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, [search]);

    return (
        <>
            <Container className="mt-4">
                <Row>
                    {meals ? (
                        meals.map((meal) => (
                            <Col
                                lg={4}
                                md={6}
                                className="my-3"
                                key={meal.idMeal}
                            >
                                <FoodCard meal={meal} />
                            </Col>
                        ))
                    ) : (
                        <Col md={12}>
                            <h2 className="text-center mt-5">
                                Items not found 😟😟
                            </h2>
                        </Col>
                    )}
                </Row>
            </Container>
            {loading && <Loading />}
        </>
    );
};

export default FoodItems;
