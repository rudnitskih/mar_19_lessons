import React from 'react';
import './StoreCard.css'

export function StoreCard(props) {
  return (
    <div className="store-card">
      <span className="store-card__title">{props.title}</span>
      <ul className="store-card__categories">
        {props.categories.map((category, i) => {
          return (
            <li className="store-card__category" key={i}>{category}</li>
          )
        })}
      </ul>
    </div>


  )
}
