import { Component } from "react";

import Card from "../../components/Card";
import Button from "../../components/Button";
import Layout from "../../components/Layout";
import Loading from "../../components/Loading";

import axios from "axios";
import Swal from "sweetalert2";

interface StoreState {
  products: Array<string | {}>;
  categories: Array<[]>;
  isLoading: boolean;
}

class FakeStore extends Component<StoreState> {
  state = {
    products: [],
    categories: [],
    isLoading: false,
  };

  getAllProducts() {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((response) => {
        this.setState({ isLoading: true });
        this.setState({ products: response.data });
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed",
          text: `Something went wrong! Message : ${error}`,
          confirmButtonText: "OK",
        });
      });
  }

  getAllCategories() {
    axios
      .get(`https://fakestoreapi.com/products/categories`)
      .then((response) => {
        this.setState({ categories: response.data });
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed",
          text: `Something went wrong! Message : ${error}`,
          confirmButtonText: "OK",
        });
      });
  }

  getSpecificCategories(category: string) {
    axios
      .get(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => {
        this.setState({ products: response.data });
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed",
          text: `Something went wrong! Message : ${error}`,
          confirmButtonText: "OK",
        });
      });
  }

  componentDidMount() {
    this.getAllProducts();
    this.getAllCategories();
  }

  render() {
    const { products, categories, isLoading } = this.state;

    console.log("categories ", categories);

    return (
      <Layout>
        <div className="m-10 flex flex-column">
          {categories.map((item: any, index) => {
            return (
              <div className="w-58 h-18">
                <Button
                  key={index}
                  id="categories"
                  label={item}
                  onClick={() => this.getSpecificCategories(item)}
                />
              </div>
            );
          })}
        </div>
        <div className="m-10 flex flex-column flex-wrap">
          {products && isLoading === true ? (
            products.map((item: any, index) => {
              return (
                <Card
                  key={index}
                  id="news"
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  label="Buy Now"
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </Layout>
    );
  }
}

export default FakeStore;
