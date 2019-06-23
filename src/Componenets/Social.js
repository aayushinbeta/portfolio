import React, { Component } from "react";

export class Social extends Component {
  render() {
    return (
      <div className="social">
        <div className="socialDiv">
          <h1>Follow me on</h1>
        </div>
        <div className="socialDiv">
          <button className="btn">Facebook</button>
        </div>
      </div>
    );
  }
}

export default Social;
