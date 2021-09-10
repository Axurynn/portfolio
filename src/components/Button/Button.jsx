import s from "./Button.module.scss";

const Button = ({ text, Icon, callback }) => {
  return (
    <div className={s.containerButton}>
      <button className={s.button} onClick={callback}>
        <span>{text}</span>
        <span className={s.iconButton}>
          <Icon />
        </span>
      </button>
    </div>
  );
};

export default Button;
