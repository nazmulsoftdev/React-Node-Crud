import React from "react";

function Input({ type, value, placeholder, className, required, onChange }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      className={className}
      required={required}
      onChange={onChange}
    />
  );
}

export default Input;
