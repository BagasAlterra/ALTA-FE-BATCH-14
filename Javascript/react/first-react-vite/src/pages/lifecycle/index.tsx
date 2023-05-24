import { Component } from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout";

interface LifecycleState {
  value?: string;
}

class Lifecycle extends Component<LifecycleState> {
  state = {
    value: "",
  };

  componentDidMount() {
    this.setState({ value: "mounting" });
  }

  componentDidUpdate() {
    if (this.state.value === "updating") {
      console.log("Component Did Update");
    }
  }

  componentWillUnmount() {
    this.setState({ value: "unmounting" });
    console.log("Component Will Unmount");
  }

  handleClick = () => {
    this.setState({ value: "updating" });
  };

  render() {
    const { value } = this.state;

    return (
      <Layout>
        <h1>Halaman Lifecycle</h1>
        {value === "mounting" ? (
          <div className="w-40 h-18 bg-orange-500">Mounting</div>
        ) : value === "updating" ? (
          <div className="w-40 h-18 bg-green-500">Updating</div>
        ) : value === "unmounting" ? (
          <h1>Loading ... </h1>
        ) : (
          <></>
        )}
        <div className="w-60 h-20">
          <Button
            id="lifecycle"
            label="Update Component"
            onClick={() => this.handleClick()}
          />
        </div>
      </Layout>
    );
  }
}

export default Lifecycle;
