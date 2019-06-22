import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {StoreCard} from "./StoreCard/StoreCard";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";


function RestaurantPage() {
  return <h1>
    Musafitr Restaurant page
    <Link to="/">Back to main</Link>
  </h1>;
}

function MainPage() {
  const restaurants = [
    {
      title: 'Musafir',
      categories: ['Крымскотатарская', 'Азитская', 'Пиво']
    },
    {
      title: 'McDonald\'s',
      categories: ['Бургеры']
    },
    {
      title: 'KFC',
      categories: ['Курочка', 'Пиво']
    },
  ];

  return (
    <ul className="app__restaurants">
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

function App() {
  return (
    <>
      <Header />

      <Router>
        <Route path="/"
               exact
               component={MainPage}/>
        <Route path="/restaurant"
               component={RestaurantPage}/>
      </Router>
    </>
  );
}

export default App;
