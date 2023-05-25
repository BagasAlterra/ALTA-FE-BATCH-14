import { Component } from "react";
import { withRouter } from "../../withRouter";
import Layout from "../../components/Layout";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Loading from "../../components/Loading";

import Cookies from "js-cookie";
import axios from "axios";
import Swal from "sweetalert2";

interface NewsProps {
  location: any;
  navigate: any;
}

interface NewsState {
  news: Array<string | number>;
  category: string;
  country: string;
  isLoading: boolean;
}

class News extends Component<NewsProps, NewsState> {
  state = {
    news: [],
    category: "",
    country: "",
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
    } else if (this.state.category === "politics") {
      this.fetchNews("politics");
    }
  }

  handleLogout() {
    const navigate = this.props.navigate;
    Cookies.remove("Username");
    Cookies.remove("Member");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Successfully Logout!",
    });
    navigate("/");
  }

  render() {
    const { news, isLoading } = this.state;
    const { location } = this.props;
    const member = Cookies.get("Member");
    const pin = sessionStorage.getItem("Pin");

    console.log("your pin is ", pin);

    return (
      <Layout>
        <h1>
          {location?.state?.username
            ? `Hello, welcome ${location?.state?.username}`
            : `You're not logged in`}
        </h1>
        <div className="w-24 h-18">
          <Button
            id="logout"
            label="Logout"
            onClick={() => this.handleLogout()}
          />
        </div>
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
          <Button
            id="politics"
            label="Politics"
            onClick={() => this.setState({ category: "politics" })}
          />
        </div>
        <div className="m-10 flex flex-column flex-wrap">
          {member === "premium" ? (
            <>
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
            </>
          ) : (
            <h1> Upgrade Premium to see this content</h1>
          )}
        </div>
      </Layout>
    );
  }
}

export default withRouter(News);
