import React from "react";
import classes from "./Button.module.css";

const Button = React.forwardRef((props, ref) => {
  const classNames = `${classes.button} ${classes["type_" + props.type]}`;

  return (
    <button
      href={props.href}
      onClick={props.onClick}
      ref={ref}
      className={classNames}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";

export default Button;
