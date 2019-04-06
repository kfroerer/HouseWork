import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 110, clear: "both", textAlign: "center", color: "#00cccc"}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
