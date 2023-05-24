import React, { Component } from "react";

interface SelectInputProps {
  options: Array<[]>;
  key: any;
  onSelect: (value: string) => void;
}

class SelectInput extends Component<SelectInputProps> {
  render() {
    const { options, onSelect, key } = this.props;

    return (
      <select className="px-4 py-4 border border-gray-300 rounded-md">
        {options.map((option: any) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    );
  }
}

export default SelectInput;
