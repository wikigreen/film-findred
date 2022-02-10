import React from "react";
import "./Input.css";

const Input: React.FC<{
  inputType: string;
  inputOnBlur: () => void;
  inputOnFocus: () => void;
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  showLabel: boolean;
}> = (props) => {
  return (
    <div className="input-container">
      {props.showLabel && (
        <label className="input-container-label">Search</label>
      )}
      <input
        type={props.inputType}
        onBlur={props.inputOnBlur}
        onFocus={props.inputOnFocus}
        onChange={props.inputOnChange}
      />
    </div>
  );
};

export default Input;
