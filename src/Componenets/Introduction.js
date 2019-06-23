import React, { Component } from "react";

export class Introduction extends Component {
  render() {
    return (
      <div className="intro">
        <div className="image">
          <img src={require("./img.png")} />
        </div>
        <div className="introText">
          <div>
            <div>
              <h5>Hi There</h5>
            </div>
            <div>
              <h1>
                MY NAME IS AAYUSH I AM A FULLSTACK DEVELOPER <br/> WEB DESIGINER <br/> UI ENTHUSIAST
              </h1>
            </div>
            <div>
              <h3>So you want to hire me ??</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Introduction;
