import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StoreCard } from "../StoreCard/StoreCard";

export function Restaraunts(props) {
  const [restaurants, setRestaraunts] = useState([]);

  useEffect(() => {
    fetch("https://uber-eats-mates.herokuapp.com/api/v1/restaurants")
      .then(response => {
        return response.json();
      })
      .then(loadedRestaraunts => {
        setRestaraunts(loadedRestaraunts);
      });
  });

  return (
    <ul className="restaurants">
      {restaurants.length > 0
        ? restaurants
            .filter(restaurent => restaurent.title.includes(props.searchValue))
            .map((restaurent, i) => {
              return (
                <li key={restaurent.uuid} className="restaurants__item">
                  <Link to={`/restaurant/${restaurent.uuid}`}>
                    <StoreCard restaurent={restaurent} />
                  </Link>
                </li>
              );
            })
        : "Loading..."}
    </ul>
  );
}
