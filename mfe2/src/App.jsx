import React from "react";
import ReactDOM from "react-dom";
import HomeContent from "./HomeContent";

import "./index.scss";

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <HomeContent />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
