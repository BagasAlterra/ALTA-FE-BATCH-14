import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, login } from "../../features/authSlice";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | number>();

  const onLogin = () => {
    const user: User = {
      username,
      password,
    };

    if (user.username !== "" && user.password !== "") {
      dispatch(login(user));
      navigate("/count");
    } else {
      Swal.fire({
        title: "Failed",
        text: "Please check your username or password!",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md">
        <Input
          id="username"
          name="username"
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button id="login" label="Login" onClick={() => onLogin()} />
      </div>
    </div>
  );
};

export default Login;
