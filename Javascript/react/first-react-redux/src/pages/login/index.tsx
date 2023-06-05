import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, login } from "../../features/authSlice";
import { useDispatch } from "react-redux";

import Swal from "sweetalert2";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required("Username required"),
  password: Yup.string().required("Password required"),
});

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [check, setCheck] = useState<boolean>(true);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onLogin = () => {
    const user: User = {
      username: formik.values.username,
      password: formik.values.password,
    };
    console.log("username : ", user.username);
    console.log("password : ", user.password);
    if (user.username !== "" && user.password !== "") {
      dispatch(login(user));
      navigate("/count");
    } else {
      setCheck(false);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: `Check your username or password again!`,
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
          value={formik.values.username}
          onChange={formik.handleChange}
          error={check === false && formik.errors.username}
        />
        <Input
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={check === false && formik.errors.password}
        />
        <Button id="login" label="Login" onClick={() => onLogin()} />
      </div>
    </div>
  );
};

export default Login;
