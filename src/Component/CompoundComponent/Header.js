import React, { useContext } from "react";
import { ExpandableContext } from "./Expandable";
import "./Header.css";

const Header = ({ children, className = "", toggle, ...otherProps }) => {
  const combinedClassName = ["Expandable-trigger", className].join("");

  return (
    <button onClick={toggle} className={combinedClassName} {...otherProps}>
      {children}
    </button>
  );
};
export default Header;
