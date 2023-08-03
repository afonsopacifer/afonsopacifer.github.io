import React from 'react';
import './price-card.css';

const PriceCard = ({ title, price, duration, items }) => {
  
  const $items = items.map(item => <li className = 'price-card__item'> { item } </li>);

  return (
    <article className = 'price-card'>

      <header className = 'price-card__header'>

        <h1 className = 'price-card__heading price-card__heading--lv1'> { title } </h1>
        <h2 className = 'price-card__heading price-card__heading--lv2'> R$ { price } </h2>
        <h3 className = 'price-card__heading price-card__heading--lv3'> /{ duration } </h3>

      </header>

      <ul className = 'price-card__list'>

        { $items }

      </ul>

      <button className = 'price-card__button'>
        Get Started
      </button>

    </article>
  )
};

export default PriceCard;
