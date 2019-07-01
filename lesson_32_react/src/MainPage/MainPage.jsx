import React from "react";
import { Search } from "../Search/Search";
import { Restaraunts } from "../Restaraunts/Restaraunts";

export function MainPage() {
  const title = "Kyiv Restararunt";

  return (
    <div className="main-page">
      <div className="main-page__search">
        <Search />
      </div>

      <h1 className="main-page__title">{title}</h1>

      <Restaraunts />
    </div>
  );
}
