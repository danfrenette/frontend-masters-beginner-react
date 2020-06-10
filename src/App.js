import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">
          This tag will be overwritten by CSS
        </Link>
      </header>
      <Router>
        <SearchParams path="/"/>
        <Details path="/details/:id"/>
      </Router>
    </div>
  );
};

render(<App />, document.getElementById("root"));
