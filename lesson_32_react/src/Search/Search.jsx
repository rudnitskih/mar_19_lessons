import React from "react";

export function Search(props) {
  function onInputHandler(event) {
    props.onSearchChange(event.target.value);
  }

  return (
    <div className="search">
      <label className="search__label">
        <input
          type="text"
          className="search__input"
          onInput={onInputHandler}
          onChange={onInputHandler}
          value={props.searchValue}
        />
      </label>
      <button className="search__submit">Submit</button>
    </div>
  );
}
