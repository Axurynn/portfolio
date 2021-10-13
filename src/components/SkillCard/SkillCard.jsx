import s from "./SkillCard.module.scss";

const SkillCard = ({ skills }) => {
  return (
    <>
      {skills.map(({ Icon, text }, i) => {
        return (
          <div key={i} className={s.containerSkillCard}>
            <div className={s.icon}>{!Icon ? "" : <Icon />}</div>
            <p className={s.text}>{text}</p>
          </div>
        );
      })}
    </>
  );
};

export default SkillCard;
