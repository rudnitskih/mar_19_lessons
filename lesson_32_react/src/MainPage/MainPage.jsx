import React from "react";
import { Search } from "../Search/Search";
import { Restaraunts } from "../Restaraunts/Restaraunts";

export class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };
  }

  updateSearchValue = searchValue => {
    this.setState({
      searchValue: searchValue
    });
  };

  render() {
    const title = "Kyiv Restararunt";

    return (
      <div className="main-page">
        <div className="main-page__search">
          <Search onSearchChange={this.updateSearchValue} />
        </div>

        <h1 className="main-page__title">{title}</h1>

        <Restaraunts searchValue={this.state.searchValue} />
      </div>
    );
  }
}
