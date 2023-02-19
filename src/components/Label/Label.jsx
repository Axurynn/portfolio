import classNames from "classnames";
import s from "./Label.module.scss";

const Label = ({ text }) => {
  const classes = classNames(
    s.labelContainer,
    { [`${s.colorReact}`]: text === "React" },
    { [`${s.colorSass}`]: text === "Sass" },
    { [`${s.colorRedux}`]: text === "Redux" },
    { [`${s.colorPostgreSQL}`]: text === "PostgreSQL" },
    { [`${s.colorSequelize}`]: text === "Sequelize" },
    { [`${s.colorNode}`]: text === "NodeJS" },
    { [`${s.colorJavaScript}`]: text === "JavaScript" },
    { [`${s.colorExpress}`]: text === "Express" },
    { [`${s.colorNextJs}`]: text === "NextJs" },
    { [`${s.colorNestJs}`]: text === "NestJs" }
  );
  return (
    <span className={classes}>
      <span>{text}</span>
    </span>
  );
};

export default Label;
