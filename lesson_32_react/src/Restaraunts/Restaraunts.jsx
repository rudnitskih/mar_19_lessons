import React from 'react';
import {Link} from "react-router-dom";
import {StoreCard} from "../StoreCard/StoreCard";
import {restaurants} from './restaurants';

export function Restaraunts() {
  return (
    <ul className="restaurants">
      {restaurants.map((restaurent, i) => {
        return (
          <li key={i}>
            <Link to="/restaurant">
              <StoreCard
                restaurent={restaurent}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
