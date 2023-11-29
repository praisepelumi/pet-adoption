/* eslint-env browser */

import React from "react";
import ReactDOM from "react-dom";

const Pet = ({ animal, name, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, animal),
    React.createElement("h2", {}, name),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      animal: "Dog",
      name: "Tasha",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, {
      animal: "Bird",
      name: "Rio",
      breed: "Azul",
    }),
    React.createElement(Pet, {
      animal: "Cat",
      name: "Bibi",
      breed: "mixed",
    }),
  ]);
};

// get our html root, the div that would contain our entire application
const container = document.getElementById("root");

// create a root for your REACTDOM which you create with your container
const root = ReactDOM.createRoot(container);

// unto your root, you render your main App
root.render(React.createElement(App));
