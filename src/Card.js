import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    return (
      <div className="card">
        <div
          className="card-pic"
          style={{
            backgroundImage: `url("${this.state.data.profile_picture}")`,
            width: "100%",
            height: "300px",
            backgroundSize: "100% 300px",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="card-title">{this.state.data.title}</div>
        <div className="card-name">{this.state.data.name}</div>
        <div className="card-location">
          {this.state.data.address.city + " " + this.state.data.address.state}
        </div>
        <div className="card-ratings">
          <div className="card-rating">
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
            <FontAwesomeIcon icon="star" />
          </div>
          <div className="card-button">View Profile</div>
        </div>
      </div>
    );
  }
}

export default Card;
