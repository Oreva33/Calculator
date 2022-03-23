import React from "react";
import "./Button.css"
const Button = (props) => {
  const numberValueHander = () => {
    props.noHandler(props.number);
  };
  return <button className="reg-button" onClick={numberValueHander}>{props.number}</button>;
};

export default Button;
