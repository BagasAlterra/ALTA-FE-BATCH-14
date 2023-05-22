import { Component } from "react";
import Button from "./components/Button";

import Card from "./components/Card";
import CustomerService from "./components/CustomerService";
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
        <CustomerService />
      </div>
    );
  }
}

export default App;
