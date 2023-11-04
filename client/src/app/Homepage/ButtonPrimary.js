import React from "react";

const ButtonPrimary = ({ className, textClassName }) => {
  return (
    <button className={className}>
      <span className={textClassName}>Button Primary Text</span>
    </button>
  );
};

export default ButtonPrimary;
