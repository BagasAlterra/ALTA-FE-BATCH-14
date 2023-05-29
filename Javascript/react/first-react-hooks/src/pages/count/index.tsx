import Button from "../../components/Button";
import Layout from "../../components/Layout";

import { useCountContext } from "../../context/countContext";
import { useModeContext } from "../../context/modeContext";
import { useNavigate } from "react-router-dom";

const Count = () => {
  // memanggil state dari useCountContext / global state
  const { handleCount, count } = useCountContext();
  const { handleToggle, toggle } = useModeContext();
  const navigate = useNavigate();

  console.log("toggle : ", toggle);
  console.log("count : ", count);

  // untuk menampilkan hasil state, panggil count dari global state
  // untuk merubah state, panggil fungsi handleCount() dari global state
  return (
    <Layout isMode={toggle}>
      <div className="m-10 space-y-5 w-40 h-12">
        <Button id="mode" label="Switch Mode" onClick={() => handleToggle()} />
        <p
          className={`font-semibold ${
            toggle === true ? "text-white" : "text-black"
          }`}
        >
          Result : {count}{" "}
        </p>
        <div className="flex flex-row w-40 h-12">
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
