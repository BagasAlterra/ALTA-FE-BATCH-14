import { Component } from "react";

class Navbar extends Component {
  render() {
    const logo =
      "https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png";

    return (
      <div className="navbar w-screen bg-alta-custom-amber shadow-md z-10 top-0 sticky">
        <div className="flex-1 ml-7 bg-alta-custom-amber">
          <img src={logo} width={90} height={90} />
        </div>
        <div className="flex-none bg-alta-custom-amber">
          <ul className="menu menu-horizontal p-0">
            <li className="text-white">
              <a href="#">Home</a>
            </li>
            <li className="text-white">
              <a href="#">About</a>
            </li>
            <li className="text-white">
              <a href="#">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
