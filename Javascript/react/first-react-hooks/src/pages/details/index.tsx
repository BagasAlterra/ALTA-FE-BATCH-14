import React from "react";
import { useCountContext } from "../../context/countContext";

const Details = () => {
  const { count } = useCountContext();

  return (
    <div>
      <h1>Get from global state : {count}</h1>
    </div>
  );
};

export default Details;
