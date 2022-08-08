import classes from "./Subtitle.module.css";

const Subtitle = (props) => {
  const classNames = `${classes.subtitle} ${classes["color_" + props.color]} ${
    classes["size_" + props.size]
  }`;

  return <h2 className={classNames}>{props.children}</h2>;
};

export default Subtitle;
