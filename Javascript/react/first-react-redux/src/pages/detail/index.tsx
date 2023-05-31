import React from "react";

import Layout from "../../components/Layout";

import { useSelector } from "react-redux";
import { CartState } from "../../features/cartSlice";

const Detail = () => {
  const cart = useSelector((state: { cart: CartState }) => state.cart);
  const items = JSON.stringify(localStorage.getItem("items"));

  console.log(
    "hasil add quantity : ",
    cart.items.map((item) => item.name)
  );

  console.log("local storage : ", items);

  return (
    <Layout>
      {cart ? (
        cart?.items?.map((item) => {
          return (
            <div className="w-40 h-20 rounded-md shadow-md text-black">
              <p className="font-semibold">{item?.name}</p>
              <p>{item?.price}</p>
            </div>
          );
        })
      ) : (
        <h1 className="text-black">Kamu belum menambahkan apapun kesini ...</h1>
      )}
    </Layout>
  );
};

export default Detail;
