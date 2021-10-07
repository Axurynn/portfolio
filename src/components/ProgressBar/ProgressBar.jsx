import s from "./ProgressBar.module.scss";

const ProgressBar = ({ completedBar }) => {
  return (
    <>
      {completedBar.map(({ completed, text }, i) => (
        <div key={i} className={s.container}>
          <div className={s.progressBarText}>{text}</div>
          <div className={s.progressBarContainer}>
            <div style={{ width: completed + "%" }} className={s.content}>
              <span className={s.text}>-</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProgressBar;
