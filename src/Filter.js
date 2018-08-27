import React, { Component } from "react";
import "./App.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      sortBy: this.props.sortBy,
      header: "Sort by (best match)"
    };
  }

  handleClick() {
    this.setState({
      open: !this.state.open
    });
  }

  handleItemClick(id, name) {
    this.handleClick();
    this.props.handleSort(id);
    this.setState({
      header: name
    });
  }
  render() {
    return (
      <div>
        <div className="filter-title">
          Newest Contractors in Santa Clara, Ca
        </div>
        <div className="dropdown">
          <div
            className="dropdown-header"
            onClick={this.handleClick.bind(this)}
          >
            {this.state.header}
          </div>
          {this.state.open && (
            <div className="dropdown-ui">
              {this.state.sortBy.map(item => (
                <a
                  className="dropdown-item"
                  key={item.id}
                  onClick={() => this.handleItemClick(item.id, item.name)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Filter;
