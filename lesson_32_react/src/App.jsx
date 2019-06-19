import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {StoreCard} from "./StoreCard/StoreCard";


function App() {
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
    <>
      <Header />
      <ul className="app__restaurants">
        {restaurants.map(({title, categories}, i) => {
          return (
            <li key={i}>
              <StoreCard
                title={title}
                categories={categories}
              />
            </li>
          )
        })}
      </ul>
    </>
  );

  // return (
  //   <div className="App">
  //     <Header />
  //   </div>
  // );
}

export default App;
