import { Component } from "react";

import Card from "./components/Card";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="m-10 gap-y-5 gap-x-5 flex flex-row">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
