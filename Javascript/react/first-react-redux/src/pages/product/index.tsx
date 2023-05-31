import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem, Item, CartState } from "../../features/cartSlice";
import axios from "axios";

import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: { cart: CartState }) => state.cart);
  const [data, setData] = useState<[]>([]);
  const [id, setId] = useState<number>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAllProduct = () => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        setLoading(true);
        setData(response.data);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: error,
          confirmButtonText: "OK",
        });
      });
  };

  const addToCart = (item: any) => {
    const newItem: Item[] | string = [
      {
        id: item.id,
        name: item.title,
        price: item.price,
      },
    ];
    setId(item.id);
    dispatch(addItem([...newItem]));
    localStorage.setItem("items", cart.items);
    console.log("add to cart : ", cart.items);
    Swal.fire({
      icon: "success",
      title: "Success Added",
      text: "Successfully add to cart",
      confirmButtonText: "OK",
    });
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <Layout>
      <div className="m-10 text-black flex flex-wrap">
        <div className="w-40 h-20">
          <Button
            id="navigate"
            label="Navigate to Detail"
            onClick={() => navigate(`/detail/${id}`)}
          />
        </div>
        {data && loading === true ? (
          data.map((item: any, index) => {
            return (
              <Card
                key={index}
                id={item.id}
                title={item.title}
                description={item.description}
                image={item.image}
                price={item.price}
                handleDetail={() => addToCart(item)}
              />
            );
          })
        ) : (
          <h1 className="m-10">Loading, please wait a seconds ...</h1>
        )}
      </div>
    </Layout>
  );
};

export default Product;
