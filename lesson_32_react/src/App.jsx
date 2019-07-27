import React from "react";
import "./App.css";
import { Header } from "./Header/Header";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { MainPage } from "./MainPage/MainPage";

function RestaurantPage(props) {
  const restaurantId = props.match.params.id;

  return (
    <h1>
      ID: {restaurantId}
      <Link to="/">Back to main</Link>
    </h1>
  );
}

function App() {
  return (
    <>
      <Header />

      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/restaurant/:id" component={RestaurantPage} />
      </Router>
    </>
  );
}

export default App;
