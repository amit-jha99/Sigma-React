import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement =>Object=>HTML Element ( when we render it on the DOM)

const heading = React.createElement("h1", {id:"heading"}, "Tough times create strong men");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);