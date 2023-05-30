import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Swal from "sweetalert2";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Product = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<[]>([]);
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

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <Layout>
      <div className="m-10 text-black flex flex-wrap">
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
                handleDetail={() => navigate(`/detail/${item.id}`)}
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
