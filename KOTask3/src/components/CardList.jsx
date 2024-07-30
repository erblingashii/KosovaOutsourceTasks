import React from 'react';
import Card from './Card';
import './CardList.css';

const CardList = ({ cards }) => (
  <div className="cardList">
    {cards.map((card, index) => (
      <Card key={index} {...card} />
    ))}
  </div>
);

export default CardList;
