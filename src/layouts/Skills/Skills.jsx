import s from "./Skills.module.scss";
import data from "./data";
import SkillCard from "../../components/SkillCard/SkillCard";

const Skills = () => {
  return (
    <>
      <div className={s.skills} id="Skills">
        <div className={s.head}>
          <h1 className={s.title}>Compétences</h1>
        </div>
        <div className={s.container}>
          {data.map(({ title, Icon, skills }) => (
            <div className={s.content}>
              <div className={s.contentHeader}>
                <span>
                  <Icon />
                </span>
                <h2 className={s.subtitle}>{title}</h2>
              </div>
              <div className={s.skillsMap}>
                <SkillCard skills={skills} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
