import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import Header from "home/Header";
import Footer from "home/Footer";
import HomeContent from "mfe2/HomeContent";

import intro from "ui/intro"

const App = () => (
  <div className="text-3xl mx-auto max-w-6xl">
    {/* <Header />
    <HomeContent />
    <Footer /> */}
    <intro />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
