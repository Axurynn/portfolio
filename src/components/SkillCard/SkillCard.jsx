import s from "./SkillCard.module.scss";

const SkillCard = ({ skills }) => {
  return (
    <div className={s.containerSkillCard}>
      {skills.map(({ Icon = null, text = "", color = "" }, i) => {
        return (
          <div key={i} className={s.card} style={{ "--colorBG": color }}>
            <div className={s.icon}>{!Icon ? "" : <Icon />}</div>
            <p className={s.text}>{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SkillCard;
