import React from "react";
import { Search } from "../Search/Search";
import { Restaraunts } from "../Restaraunts/Restaraunts";
import { Container } from "../Container/Container";

export class MainPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      searchValue: ""
    };

    console.log("constructor");
  }

  componentDidMount() {
    const search = JSON.parse(window.localStorage.getItem("search"));

    this.setState({
      search: search ? search.value : ""
    });

    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  updateSearchValue = searchValue => {
    this.setState({
      searchValue: searchValue
    });

    window.localStorage.setItem(
      "search",
      JSON.stringify({
        value: searchValue
      })
    );
  };

  render() {
    const title = "Kyiv Restararunt";
    console.log("render");

    return (
      <Container>
        <div className="main-page">
          <div className="main-page__search">
            <Search
              searchValue={this.state.searchValue}
              onSearchChange={this.updateSearchValue}
            />
          </div>

          <h1 className="MainPage__title">{title}</h1>

          <Restaraunts searchValue={this.state.searchValue} />
        </div>
      </Container>
    );
  }
}
