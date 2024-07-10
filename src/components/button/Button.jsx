import React from "react";

const Button = ({
  onClick = null,
  type = "button",
  children = "Button",
  color = "blue",
  className = null,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={
        `rounded-md w-fit p-2 bg-${color}-600 text-white hover:bg-${color}-700 active:bg-${color}-500 transition-colors text-nowrap text-sm ` +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;
