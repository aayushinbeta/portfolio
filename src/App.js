import React from "react";
import "./App.css";

//components
import Header from "./Componenets/Header";
import Introduction from "./Componenets/Introduction";
import Stats from "./Componenets/Stats";
import Social from "./Componenets/Social";
import Skills from "./Componenets/Skills";
import Projects from "./Componenets/Projects";
import Contact from "./Componenets/Contact";

function App() {
  return (
    <div>
      <Header />
      <Introduction />
      <Stats />
      <Social />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
