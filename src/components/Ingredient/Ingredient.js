import { faHandPointRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Ingredient = ({ strIngredient, strMeasure }) => {
    return (
        <>
            {strIngredient && (
                <li>
                    <FontAwesomeIcon
                        icon={faHandPointRight}
                        className="icon-color"
                    />{' '}
                    {strIngredient} {strMeasure}
                </li>
            )}
        </>
    );
};

export default Ingredient;
