import React, { Component } from "react";

export class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <div className="skillsHead">
          <h1>Skills</h1>
        </div>
        <div className="skilldiv">
          <div className="skillset">
            <h2>FrontEnd</h2>
            <p>HTML</p>
            <p>CSS</p>
            <p>JAVASCRIPT</p>
          </div>
          <div className="skillset">
            <h2>Backend</h2>
            <p>Node</p>
            <p>MongoDb</p>
          </div>
          <div className="skillset">
            <h2>Miscellaneous</h2>
            <p>Joking</p>
            <p>Working</p>
            <p>Weeb</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
