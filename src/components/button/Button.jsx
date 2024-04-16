import React from "react";

const Button = ({
  onClick = null,
  type = "button",
  children = "Button",
  color = "blue",
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`rounded-md w-fit p-2 bg-${color}-600 text-white hover:bg-${color}-700 active:bg-${color}-500 transition-colors text-nowrap text-sm`}
    >
      {children}
    </button>
  );
};

export default Button;
