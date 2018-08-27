import React, { Component } from "react";
import "./App.css";
import Header from "./Header.js";
import Filter from "./Filter.js";
import Cards from "./Cards.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar, faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
library.add(faStar, faGlobe, faBars);

class App extends Component {
  constructor() {
    super();
    this.state = {
      sortBy: [{ id: 1, name: "Top rated" }, { id: 2, name: "Most popular" }],
      sort: 0
    };
  }

  handleSort(id) {
    this.setState({
      sort: id
    });
  }

  componentDidMount() {}
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage:
              "url('https://troolr.com/assets/graphics/logo-small.png')",
            width: "300px",
            height: "100px",
            backgroundSize: "cover"
          }}
        />
        <Header />
        <Filter
          sortBy={this.state.sortBy}
          handleSort={this.handleSort.bind(this)}
        />
        <Cards sort={this.state.sort} />
      </div>
    );
  }
}

export default App;
