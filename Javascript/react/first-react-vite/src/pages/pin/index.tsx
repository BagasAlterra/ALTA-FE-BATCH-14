import { Component } from "react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { withRouter } from "../../withRouter";

interface PinProps {
  navigate: any;
}

interface PinState {
  pin: string;
}

export class Pin extends Component<PinProps, PinState> {
  state = {
    pin: "",
  };

  handlePin() {
    const pin = this.state.pin;
    const { navigate } = this.props;
    sessionStorage.setItem("Pin", pin);
    navigate("/news");
  }

  render() {
    const { pin } = this.state;

    return (
      <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-md shadow-md">
          <Input
            id="pin"
            label="pin"
            name="PIN Number"
            type="number"
            value={pin}
            onChange={(e) => this.setState({ pin: e.target.value })}
          />
          <Button id="login" label="Login" onClick={() => this.handlePin()} />
        </div>
      </div>
    );
  }
}

export default withRouter(Pin);
