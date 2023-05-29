import { FC } from "react";

interface LayoutProps {
  children?: React.ReactNode;
  isMode?: boolean | string;
}

const Layout: FC<LayoutProps> = ({ children, isMode }) => {
  return (
    <div
      className={`flex flex-col w-screen ${isMode ? `bg-black` : `bg-white`}`}
    >
      <div className="flex-1 min-h-screen">{children}</div>
    </div>
  );
};

export default Layout;
