import { Component } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

import axios from "axios";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

interface NewsState {
  news: Array<string | number>;
  category: string;
  isLoading: boolean;
}

class News extends Component<NewsState> {
  state = {
    news: [],
    category: "",
    isLoading: false,
  };

  fetchNews(category?: string) {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
          import.meta.env.VITE_NEWS_API
        }`
      )
      .then((response) => {
        this.setState({ isLoading: true });
        this.setState({ news: response.data.articles });
      })
      .catch((error) => {
        console.log("error : ", error.message);
      });
  }

  componentDidMount() {
    this.fetchNews("politics");
  }

  componentDidUpdate() {
    if (this.state.category === "business") {
      this.fetchNews("business");
    } else if (this.state.category === "health") {
      this.fetchNews("health");
    } else if (this.state.category === "sports") {
      this.fetchNews("sports");
    } else {
      this.fetchNews("politics");
    }
  }

  render() {
    const { news, isLoading } = this.state;

    return (
      <Layout>
        <h1>Halaman News</h1>
        <div className="m-10 w-24 h-18 flex flex-column">
          <Button
            id="business"
            label="Business"
            onClick={() => this.setState({ category: "business" })}
          />
          <Button
            id="health"
            label="Health"
            onClick={() => this.setState({ category: "health" })}
          />
          <Button
            id="sports"
            label="Sports"
            onClick={() => this.setState({ category: "sports" })}
          />
        </div>
        <div className="m-10 flex flex-column flex-wrap">
          {news && isLoading === true ? (
            news.map((item: any, index) => {
              return (
                <Card
                  key={index}
                  id="news"
                  title={item.title}
                  description={item.description}
                  image={item.urlToImage}
                  label="Read Now"
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

export default News;
