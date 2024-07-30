import React from 'react';
import './Card.css';

const Card = ({ title, price, oldPrice }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{price}</p>
    <p className="oldPrice">Instead of {oldPrice}</p>
    <button className="buyButton">Buy Now</button>
  </div>
);

export default Card;
