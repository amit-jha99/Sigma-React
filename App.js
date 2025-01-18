import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child 1" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Escape the Matrix..."
    ),
    React.createElement(
      "h2",
      { id: "heading" },
      "Hello I am a heading h2 inside nested elements"
    ),
  ]),
  React.createElement("div", { id: "child 2" }, [
    React.createElement(
      "h1",
      { id: "heading" },
      "Hello I am a heading inside nested elements"
    ),
    React.createElement(
      "h2",
      { id: "heading" },
      "Hello I am a heading h2 inside nested elements"
    ),
  ]),
]);
// const heading = React.createElement("h1", { id: "heading" }, "Hello, React!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
