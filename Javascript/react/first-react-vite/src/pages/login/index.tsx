import { Component } from "react";
import Swal from "sweetalert2";
import { withRouter } from "../../withRouter";
import Button from "../../components/Button";
import Input from "../../components/Input";

import Cookies from "js-cookie";

interface LoginProps {
  navigate: any;
}

interface LoginState {
  username: string;
  password: string | number;
}

class Login extends Component<LoginProps, LoginState> {
  state = {
    username: "",
    password: "",
  };

  handleCookies() {
    const { username } = this.state;
    const status = "premium";
    Cookies.set("Username", username, { path: "/" });
    Cookies.set("Member", status, { path: "/" });
  }

  handleLogin() {
    this.handleCookies();
    const username = this.state.username;
    const password = this.state.password;
    const navigate = this.props.navigate;
    const credentials = {
      username: "John Doe",
      password: "johndoe12345",
    };

    // --- Simulasi POST
    // axios.post(`https://www.alta-immersive.com/users/login`, {}, {
    //     data: {
    //         username: username,
    //         password: password,
    //     }
    // })
    // .then((response) => {
    //     // jika username dan password ada, maka statusnya bisa dilihat disini
    // })
    // .catch((error) => {
    //     // jika username dan password tidak ada, maka status errornya bisa dilihat disini
    //     // jika server error, maka bisa dilihat disini juga
    // })

    // --- Simulasi PUT
    // -- sama dengan POST, hanya beda di Http Request nya aja

    if (
      username === credentials.username &&
      password === credentials.password
    ) {
      Swal.fire({
        title: "Success",
        text: `${this.state.username} was Successfully Login`,
        confirmButtonText: "OK",
        icon: "success",
      });
      navigate("/news", {
        state: {
          username: username,
        },
      });
    } else {
      Swal.fire({
        title: "Failed to Login",
        text: `Check your username or password`,
        confirmButtonText: "OK",
        icon: "error",
      });
    }
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Input
            id="username"
            label="Username"
            name="username"
            type="text"
            value={username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <Input
            id="password"
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />
          <Button id="login" label="Login" onClick={() => this.handleLogin()} />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
