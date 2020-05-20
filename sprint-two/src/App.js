import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Upload from "./components/pages/Upload";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" component={Home} exact />
          <Route path="/upload" component={Upload} exact />
        </div>
      </Router>
    );
  }
}
