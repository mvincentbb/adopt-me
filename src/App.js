import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt me </h1>
      <Pet name="Luna" animal="Dog" bree="Havanese" />
      <Pet name="Pepper" animal="Bird" bree="Cockatiel" />
      <Pet name="Beam" animal="Dog" bree="Wheaten Terrier" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
