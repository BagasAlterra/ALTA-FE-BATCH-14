import { Component } from "react";

interface GreetingsProps {
  greeting: string;
}

class Greetings extends Component<GreetingsProps> {
  render() {
    const { greeting } = this.props;

    return <h1>Hello, {greeting}</h1>;
  }
}

export default Greetings;
