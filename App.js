const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" },"Hello I am a heading inside nested elements")
  )
);
// const heading = React.createElement("h1", { id: "heading" }, "Hello, React!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
