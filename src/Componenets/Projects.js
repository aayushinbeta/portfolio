import React, { Component } from "react";

export class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <div className="projecthead">
          <h1>Projects</h1>
        </div>
        <div className="projectdiv">
          <div className="projectDetails">
            <h2>Project1</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, rem similique? Cumque at sequi odit blanditiis
              voluptates incidunt excepturi, quas molestiae, quis, quidem illo
              repudiandae quo! Maxime sint corrupti at.
            </p>
            <button className="btn">Check out</button>
          </div>
          <div className="projectDetails">
            <h2>Project2</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, rem similique? Cumque at sequi odit blanditiis
              voluptates incidunt excepturi, quas molestiae, quis, quidem illo
              repudiandae quo! Maxime sint corrupti at.
            </p>
            <button className="btn">Check out</button>
          </div>
          <div className="projectDetails">
            <h2>Project3</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Provident, rem similique? Cumque at sequi odit blanditiis
              voluptates incidunt excepturi, quas molestiae, quis, quidem illo
              repudiandae quo! Maxime sint corrupti at.
            </p>
            <button className="btn">Check out</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
