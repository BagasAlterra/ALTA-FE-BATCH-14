import { Component } from "react";

class Navbar extends Component {
  render() {
    const logo =
      "https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png";

    return (
      <div className="navbar w-screen bg-white shadow-md z-10 top-0 sticky">
        <div className="flex-1 ml-7">
          <img src={logo} width={90} height={90} />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
