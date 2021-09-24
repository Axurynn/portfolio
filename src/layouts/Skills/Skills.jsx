import s from "./Skills.module.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { ReactComponent as CurlyBracket } from "../../assets/curlyBracket.svg";
import { ReactComponent as Server } from "../../assets/server.svg";

const Skills = () => {
  const completedBarFront = [
    {
      completed: 85,
      text: "JavaScript",
    },
    {
      completed: 80,
      text: "HTML",
    },
    {
      completed: 80,
      text: "CSS",
    },
    {
      completed: 30,
      text: "React",
    },
    {
      completed: 75,
      text: "Git",
    },
  ];
  const completedBarBack = [
    {
      completed: 80,
      text: "NodeJS",
    },
    {
      completed: 80,
      text: "Express",
    },
    {
      completed: 70,
      text: "SQL",
    },
    {
      completed: 70,
      text: "PostGreSQL",
    },
    {
      completed: 50,
      text: "Sequelize",
    },
  ];
  return (
    <>
      <div className={s.skills}>
        <div className={s.head}>
          <h1 className={s.title}>Compétences</h1>
        </div>
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.contentHeader}>
              <span>
                <CurlyBracket />
              </span>
              <h2 className={s.subtitle}>Frontend</h2>
            </div>
            <ProgressBar completedBar={completedBarFront} />
          </div>
          <div className={s.content}>
            <div className={s.contentHeader}>
              <span>
                <Server />
              </span>
              <h2 className={s.subtitle}>Backend</h2>
            </div>
            <ProgressBar completedBar={completedBarBack} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
