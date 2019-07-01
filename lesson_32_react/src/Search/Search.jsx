import React from "react";

export function Search(props) {
  return (
    <div className="search">
      <label className="search__label">
        <input type="text" className="search__input" />
      </label>
      <button className="search__submit">Submit</button>
    </div>
  );
}
