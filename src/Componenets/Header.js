import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <navbar>
          <div className="heading">
            <h3>Aayush</h3>
          </div>
          <div className="links">
            <ul>
              <li>
                <h4>GITHUB</h4>
              </li>
              <li>
                <h4>PROJECTS</h4>
              </li>
              <li>
                <h4>CONTACT</h4>
              </li>
            </ul>
          </div>
        </navbar>
      </div>
    );
  }
}

export default Header;
