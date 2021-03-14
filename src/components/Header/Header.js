import React, { useState } from 'react';
import {
    Button,
    Col,
    Container,
    Form,
    FormControl,
    Row,
} from 'react-bootstrap';
import FoodItems from '../FoodItems/FoodItems';
import './Header.css';

const Header = () => {
    const [searchData, setSearchData] = useState('');
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const searchText = e.target.value;
        setSearchData(searchText);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(searchData);
    };

    return (
        <>
            <div className="Header">
                <Container className="header-content">
                    <Row>
                        <Col lg={6}>
                            <p className="home-title">
                                Food delivery from <span>Pabna</span>’s best
                                restaurants
                            </p>
                        </Col>
                    </Row>
                    <Form
                        inline
                        className="search-from py-3 mx-auto"
                        onSubmit={handleSubmit}
                    >
                        <FormControl
                            type="text"
                            className="search-input"
                            placeholder="Search by Food Name"
                            onChange={handleSearch}
                        />
                        <Button className="search-btn" type="submit">
                            Search
                        </Button>
                    </Form>
                </Container>
            </div>

            <FoodItems search={search} />
        </>
    );
};

export default Header;
