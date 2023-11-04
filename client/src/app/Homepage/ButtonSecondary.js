import React from "react";

const ButtonSecondary = ({ className, text, textClassName }) => {
  return (
    <button className={className}>
      <span className={textClassName}>{text}</span>
    </button>
  );
};

export default ButtonSecondary;
