import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>This tag will be overwritten by CSS</h1>
      <Pet name="supa" animal="hot" breed="Fire" />
      <Pet name="supa" animal="hot" breed="Fire" />
      <Pet name="supa" animal="hot" breed="Fire" />
    </div>
  );
};

render(<App/>, document.getElementById("root"));
