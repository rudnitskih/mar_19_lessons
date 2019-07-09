import React from "react";
import { Link } from "react-router-dom";
import { StoreCard } from "../StoreCard/StoreCard";
import { restaurants } from "./restaurants";

export function Restaraunts(props) {
  return (
    <ul className="restaurants">
      {restaurants
        .filter(restaurent => restaurent.title.includes(props.searchValue))
        .map((restaurent, i) => {
          return (
            <li key={restaurent.uuid} className="restaurants__item">
              <Link to="/restaurant">
                <StoreCard restaurent={restaurent} />
              </Link>
            </li>
          );
        })}
    </ul>
  );
}
