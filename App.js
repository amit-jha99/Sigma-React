import React from "react";
import ReactDOM from "react-dom/client";

/**
 * 
 * Header 
 * - Logo
 * - Navbar
 * body
 * - Search bar
 * - Restaurant container
 *    - Restaurant Card
 * footer
 *  -Copyright 
 *  - Links
 *  -Address
 *  -Contact
 * 
 */

// React.createElement =>Object=>HTML Element ( when we render it on the DOM)

//JSX
const Title = () => (
  <h1 className="heading" tabIndex="5">
    The Champ is here
  </h1>
);
//React functional Component
// Component Composition
const HeadingComponent = () => (
  <div className="container">
  <h2>{console.log("Hell Yeah")}</h2>
    {/* <Title /> */}
    {Title()}
    <h1 className="heading">
      John cena is going to win his 17th world championship
    </h1>
  </div>
);

// console.log();
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render(<HeadingComponent />);
