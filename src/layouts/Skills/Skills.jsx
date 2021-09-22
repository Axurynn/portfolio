import s from "./Skills.module.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { ReactComponent as CurlyBracket } from "../../assets/curlyBracket.svg";
import { ReactComponent as Server } from "../../assets/server.svg";

const Skills = () => {
  const completedBarFront = [
    {
      completed: 80,
      text: "JavaScript",
    },
    {
      completed: 75,
      text: "Git",
    },
  ];
  const completedBarBack = [
    {
      completed: 75,
      text: "NodeJS",
    },
    {
      completed: 70,
      text: "Express",
    },
    {
      completed: 60,
      text: "SQL",
    },
    {
      completed: 60,
      text: "PostGreSQL",
    },
    {
      completed: 50,
      text: "Sequelize",
    },
    {
      completed: 75,
      text: "Git",
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
              <h2>Frontend</h2>
            </div>
            <ProgressBar completedBar={completedBarFront} />
          </div>
          <div className={s.content}>
            <div className={s.contentHeader}>
              <span>
                <Server />
              </span>
              <h2>Backend</h2>
            </div>
            <ProgressBar completedBar={completedBarBack} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
