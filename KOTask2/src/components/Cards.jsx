import React from 'react';
import Card from './Card';
import './Cards.css';

const Cards = ({ cardData }) => {
    return (
        <div className="cards-container">
            {cardData.map((data, index) => (
                <Card 
                    key={index}
                    version={data.version}
                    date={data.date}
                    status={data.status}
                    programmer={data.programmer}
                    description={data.description}
                    programmerImage={data.programmerImage}
                />
            ))}
        </div>
    );
};

export default Cards;
