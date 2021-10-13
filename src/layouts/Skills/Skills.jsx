import s from "./Skills.module.scss";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import SkillCard from "../../components/SkillCard/SkillCard";
import { ReactComponent as CurlyBracket } from "../../assets/curlyBracket.svg";
import { ReactComponent as Server } from "../../assets/server.svg";
import {
  DiNodejs,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiGit,
  DiScrum,
} from "react-icons/di";
import {
  SiSequelize,
  SiMongodb,
  SiJavascript,
  SiReact,
  SiPostgresql,
} from "react-icons/si";
import { FaDatabase, FaNodeJs, FaTrello } from "react-icons/fa";

const Skills = () => {
  const skillsFront = [
    {
      Icon: SiJavascript,
      text: "JavaScript",
    },
    {
      Icon: DiHtml5,
      text: "HTML",
    },
    {
      Icon: DiCss3,
      text: "CSS",
    },
    {
      Icon: SiReact,
      text: "React",
    },
    {
      Icon: DiGit,
      text: "Git",
    },
    {
      Icon: DiScrum,
      text: "Scrum",
    },
    {
      Icon: FaTrello,
      text: "Trello",
    },
  ];
  const skillsBack = [
    {
      icon: null,
      text: "NodeJS",
    },
    {
      Icon: null,
      text: "Express",
    },
    {
      Icon: FaDatabase,
      text: "SQL",
    },
    {
      Icon: SiPostgresql,
      text: "PostGreSQL",
    },
    {
      Icon: null,
      text: "Sequelize",
    },
    {
      Icon: SiMongodb,
      text: "MongoDB",
    },
  ];
  // const completedBarBack = [
  //   {
  //     completed: 80,
  //     text: "NodeJS",
  //   },
  //   {
  //     completed: 80,
  //     text: "Express",
  //   },
  //   {
  //     completed: 70,
  //     text: "SQL",
  //   },
  //   {
  //     completed: 70,
  //     text: "PostGreSQL",
  //   },
  //   {
  //     completed: 50,
  //     text: "Sequelize",
  //   },
  //   {
  //     completed: 50,
  //     text: "MongoDB",
  //   },
  // ];
  // const completedBarFront = [
  //   {
  //     completed: 85,
  //     text: "JavaScript",
  //   },
  //   {
  //     completed: 80,
  //     text: "HTML",
  //   },
  //   {
  //     completed: 80,
  //     text: "CSS",
  //   },
  //   {
  //     completed: 10,
  //     text: "React",
  //   },
  //   {
  //     completed: 75,
  //     text: "Git",
  //   },
  // ];
  return (
    <>
      <div className={s.skills} id="Skills">
        <div className={s.head}>
          <h1 className={s.title}>Compétences</h1>
        </div>
        <div className={s.container}>
          <div className={s.contentFront}>
            <div className={s.contentHeader}>
              <span>
                <CurlyBracket />
              </span>
              <h2 className={s.subtitle}>Frontend</h2>
            </div>
            {/* <ProgressBar completedBar={completedBarFront} /> */}
            <div className={s.skillsMap}>
              <SkillCard skills={skillsFront} />
            </div>
          </div>
          <div className={s.contentBack}>
            <div className={s.contentHeader}>
              <span>
                <Server />
              </span>
              <h2 className={s.subtitle}>Backend</h2>
            </div>
            {/* <ProgressBar completedBar={completedBarBack} /> */}
            <div className={s.skillsMap}>
              <SkillCard skills={skillsBack} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
