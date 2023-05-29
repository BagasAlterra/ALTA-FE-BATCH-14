import Button from "../../components/Button";
import Layout from "../../components/Layout";

import { useCountContext } from "../../context/countContext";
import { useNavigate } from "react-router-dom";

const Count = () => {
  // memanggil state dari useCountContext / global state
  const { handleCount, count } = useCountContext();
  const navigate = useNavigate();

  // untuk menampilkan hasil state, panggil count dari global state
  // untuk merubah state, panggil fungsi handleCount() dari global state
  return (
    <Layout>
      <div className="m-10 space-y-5">
        <p className="font-semibold">Result : {count} </p>
        <div className="flex flex-row">
          <Button id="increment" label="+" onClick={() => handleCount(1)} />
          <Button id="reset" label="Reset" onClick={() => handleCount(0)} />
          <Button id="decrement" label="-" onClick={() => handleCount(-1)} />
        </div>
        <Button
          id="navigate"
          label="Navigate"
          onClick={() => navigate("/details")}
        />
      </div>
    </Layout>
  );
};

export default Count;
