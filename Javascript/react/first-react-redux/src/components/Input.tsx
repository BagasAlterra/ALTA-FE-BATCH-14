import React, { FC } from "react";

interface InputProps {
  id: string;
  label?: string;
  name?: string;
  type?: string;
  value?: string | number;
  error?: string | boolean | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({
  id,
  label,
  name,
  type,
  value,
  error,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        className={`shadow appearance-none border ${
          error && "border-red-500"
        } rounded w-full py-2 px-3 text-gray-700 leading-light bg-white`}
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <label className="text-red-500 font-bold">{error}</label>}
    </div>
  );
};

export default Input;
