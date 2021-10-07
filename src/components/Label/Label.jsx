import classNames from "classnames";
import s from "./Label.module.scss";

const Label = ({ text }) => {
  const classes = classNames(
    s.labelContainer,
    { [`${s.colorReact}`]: text === "React" },
    { [`${s.colorSass}`]: text === "Sass" },
    { [`${s.colorSequelize}`]: text === "Sequelize" },
    { [`${s.colorNode}`]: text === "NodeJS" },
    { [`${s.colorJavaScript}`]: text === "JavaScript" }
  );
  return (
    <span className={classes}>
      <span>{text}</span>
    </span>
  );
};

export default Label;
