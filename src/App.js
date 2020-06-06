import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me You Fuck!"),
    React.createElement(Pet, {
      name: "suh dude",
      animal: "Dog",
      breed: "unicorn"
    }),
    React.createElement(Pet, {
      name: "bruhh",
      animal: "explosion",
      breed: "fiery"
    }),
    React.createElement(Pet, {
      name: "Doink",
      animal: "cat",
      breed: "unicorn"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
