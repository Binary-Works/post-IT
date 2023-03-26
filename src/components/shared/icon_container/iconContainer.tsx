import React from "react";

type iconContainerProps = {
  children: React.ReactNode;
  size?: string;
  onClick?: React.MouseEventHandler;
};
export const IconContainer = ({ children, size = "40px", onClick }: iconContainerProps) => {
  const iconStyle = { width: size, height: size };
  return (
    <p
      style={iconStyle}
      className="center_xy bg-gray-300 rounded-full cursor-pointer"
      onClick={onClick}
    >
      {children}
    </p>
  );
};
