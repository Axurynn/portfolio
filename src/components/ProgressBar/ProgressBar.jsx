import s from "./ProgressBar.module.scss";

const ProgressBar = ({ completedBar }) => {
  return (
    <>
      {completedBar.map(({ completed, text }) => (
        <>
          <div className={s.progressBarText}>{text}</div>
          <div className={s.progressBarContainer}>
            <div style={{ width: completed + "%" }} className={s.content}>
              <span className={s.text}>-</span>
            </div>
          </div>
        </>
      ))}
    </>
  );
};

export default ProgressBar;