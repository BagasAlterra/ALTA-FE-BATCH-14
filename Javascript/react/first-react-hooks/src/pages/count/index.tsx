import Button from "../../components/Button";
import Layout from "../../components/Layout";

import { useNavigate } from "react-router-dom";

const Count = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="m-10 space-y-5">
        <p className="font-semibold">Result : </p>
        <div className="flex flex-row">
          <Button id="increment" label="+" />
          <Button id="reset" label="Reset" />
          <Button id="decrement" label="-" />
        </div>
        <Button id="navigate" label="Navigate" />
      </div>
    </Layout>
  );
};

export default Count;
