import { Component } from "react";
import Layout from "../../components/Layout";

import axios from "axios";

class News extends Component {
  // --- Versi 1 : Then & Catch
  fetchNews() {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=027a0c86b59d4edaa9c304428b94a784`
      )
      .then((response) => {
        console.log("response : ", response.data);
      })
      .catch((error) => {
        console.log("error : ", error.message);
      });
  }

  // --- Versi 2 : Try & Catch
  // async fetchNews() {
  //   try {
  //     const response = await axios.get(
  //       `https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=027a0c86b59d4edaa9c304428b94a784`
  //     );
  //     console.log("response : ", response.data);
  //   } catch (error) {
  //     console.log("error : ", error);
  //   }
  // }

  componentDidMount() {
    this.fetchNews();
  }

  render() {
    return (
      <Layout>
        <h1>Halaman News</h1>
      </Layout>
    );
  }
}

export default News;
