import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>Object=>HTML Element ( when we render it on the DOM)

//JSX
const heading = (
  <h1 className="heading" tabIndex="5">
    The Champ is here
  </h1>
);

//React functional Component

const HeadingComponent = () => (
  <div className="container">
  <h1 className="heading">
    John cena is going to win his 17th world championship
  </h1>
  </div>
);

console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
