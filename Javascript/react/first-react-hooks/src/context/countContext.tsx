import React, { FC, useState, useContext, createContext } from "react";

interface CountProps {
  children?: React.ReactNode;
  count?: number | any[];
  setCount: (count: number) => void;
}

const CountContext = createContext({} as CountProps);

export const useCountContext = () => {
  const context: any = useContext(CountContext);
  const [count, setCount] = context.count;

  // untuk mendefinisikan function yang ada di dalam useCountContext
  // useCountContext bertindak sebagai "database FE"
  const handleCount = (number: number) => {
    if (number === 0) {
      setCount(0);
    } else {
      setCount((e: number) => e + number);
    }
  };

  return {
    count,
    handleCount,
  };
};

export const CountProvider: FC<CountProps> = ({ children }) => {
  const [count, setCount] = useState<CountProps>();

  return (
    // untuk menyalurkan/mempassing state dari useCountContext ke seluruh halaman (selama masih ada di dalam router)
    <CountContext.Provider
      value={{
        count: [count, setCount],
      }}
    >
      {children}
    </CountContext.Provider>
  );
};
