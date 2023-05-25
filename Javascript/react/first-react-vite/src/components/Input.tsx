import { Component } from "react";

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

class Input extends Component<InputProps> {
  render() {
    const { id, label, name, type, value, onChange } = this.props;

    return (
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
          {label}
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-light bg-white"
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Input;
