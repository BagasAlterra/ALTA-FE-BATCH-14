import { Component } from "react";
import Swal from "sweetalert2";
import Button from "../../components/Button";

import Input from "../../components/Input";

interface LoginState {
  username: string;
  password: string | number;
}

class Login extends Component<LoginState> {
  state = {
    username: "",
    password: "",
  };

  handleLogin() {
    const username = this.state.username;
    const password = this.state.password;
    const credentials = {
      username: "John Doe",
      password: "johndoe12345",
    };

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

export default Login;
