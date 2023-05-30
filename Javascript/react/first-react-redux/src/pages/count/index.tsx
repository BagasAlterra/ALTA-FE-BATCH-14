import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout";
import Button from "../../components/Button";
import {
  CounterState,
  increment,
  decrement,
} from "../../features/counterSlice";
import { AuthState } from "../../features/authSlice";

const Count = () => {
  const dispatch = useDispatch();
  const counter = useSelector(
    (state: { counter: CounterState }) => state.counter
  );
  const auth = useSelector((state: { auth: AuthState }) => state.auth);

  return (
    <Layout>
      <div className="m-10 space-y-5">
        <h1 className="text-black">
          {auth.isAuthenticated === true
            ? `Hello, welcome ${auth.user?.username}`
            : "You're not logged in"}
        </h1>
        <div className="font-semibold text-black">
          <p>Result : {counter?.value}</p>
        </div>
        <div className="space-x-5 flex flex-row w-40 h-12">
          <Button
            id="increment"
            label="+"
            onClick={() => dispatch(increment())}
          />
          <Button
            id="decrement"
            label="-"
            onClick={() => dispatch(decrement())}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Count;
