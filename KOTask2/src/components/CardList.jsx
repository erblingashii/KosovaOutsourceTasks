import React from 'react';
import Cards from './Cards';
import './CardList.css';

const CardList = ({ cardData }) => {
    return (
        <div className="card-list">
            <Cards cardData={cardData} />
        </div>
    );
};

export default CardList;
