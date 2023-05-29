import React from "react";

import Layout from "../../components/Layout";

import { useCountContext } from "../../context/countContext";
import { useModeContext } from "../../context/modeContext";

const Details = () => {
  const { count } = useCountContext();
  const { toggle } = useModeContext();

  return (
    <Layout isMode={toggle}>
      <h1>Get from global state : {count}</h1>
    </Layout>
  );
};

export default Details;
