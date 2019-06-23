import React, { Component } from "react";

export class Stats extends Component {
  render() {
    return (
      <div className="stats">
        <div className="statDiv">
          <p>2452</p>
          <h5>bugs squashed</h5>
        </div>
        <div className="statDiv">
          <p>54</p>
          <h5>projects completed</h5>
        </div>
        <div className="statDiv">
          <p>100</p>
          <h5>fans created</h5>
        </div>
        <div className="statDiv">
          <p>0</p>
          <h5>paper wasted</h5> </div>
      </div>
    );
  }
}

export default Stats;
