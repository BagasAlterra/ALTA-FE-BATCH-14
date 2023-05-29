import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

import Input from "../../components/Input";
import Button from "../../components/Button";

import { AuthContext } from "../../context/authContext";

// import fake credentials
import { data } from "../../dummy/credentials.json";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [cookies, setCookie] = useCookies<string>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");

  const handleLogin = () => {
    if (username !== "" && password !== "") {
      login(username, password);
      navigate("/home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Fill your username and password",
      });
    }

    // if (username === data[0].username && password == data[0].password) {
    //     setCookie('username', username, { path: "/" })
    //     setCookie('status', data[0].status, { path: "/" })
    //     navigate("/home", {
    //         state: {
    //             username: username
    //         }
    //     })
    // } else if (username === data[1].username && password == data[1].password) {
    //     setCookie('username', username, { path: "/" })
    //     setCookie('status', data[1].status, { path: "/" })
    //     navigate("/home", {
    //         state: {
    //             username: username
    //         }
    //     })
    // } else if (username === data[2].username && password == data[2].password) {
    //     setCookie('username', username, { path: "/" })
    //     setCookie('status', data[2].status, { path: "/" })
    //     navigate("/home", {
    //         state: {
    //             username: username
    //         }
    //     })
    // }
    // else {
    //     Swal.fire({
    //         icon: "error",
    //         title: "Login Failed",
    //         text: "Fill your username and password"
    //     })
    // }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <Input
          id="username"
          name="username"
          value={username}
          label="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          value={password}
          label="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="login" label="Login" onClick={() => handleLogin()} />
      </div>
    </div>
  );
};

export default Login;
