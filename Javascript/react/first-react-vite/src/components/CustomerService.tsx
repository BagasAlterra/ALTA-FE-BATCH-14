import { Component } from "react";

class CustomerService extends Component {
  render() {
    const logo =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/2044px-WhatsApp.svg.png";

    return (
      <img
        src={logo}
        className="z-10 bottom-0 mt-10 ml-10 sticky"
        width={70}
        height={70}
      />
    );
  }
}

export default CustomerService;
