import { ReactComponent as CurlyBracket } from "../../assets/curlyBracket.svg";
import { ReactComponent as Server } from "../../assets/server.svg";
import { DiHtml5, DiCss3, DiGit, DiScrum, DiSass } from "react-icons/di";
import {
  SiSequelize,
  SiMongodb,
  SiJavascript,
  SiReact,
  SiPostgresql,
} from "react-icons/si";
import { FaDatabase, FaNodeJs, FaTrello, FaToolbox } from "react-icons/fa";

const data = [
  {
    title: "Backend",
    Icon: Server,
    skills: [
      {
        Icon: FaNodeJs,
        text: "NodeJS",
        color: "#77b45e",
      },
      {
        Icon: FaDatabase,
        text: "SQL",
        color: "#3c3c3c",
      },
      {
        Icon: SiPostgresql,
        text: "PostGreSQL",
        color: "#336791",
      },
      {
        Icon: SiSequelize,
        text: "Sequelize",
        color: "#2379bd",
      },
      {
        Icon: SiMongodb,
        text: "MongoDB",
        color: "#13aa52",
      },
    ],
  },
  {
    title: "Frontend",
    Icon: CurlyBracket,
    skills: [
      {
        Icon: SiJavascript,
        text: "JavaScript",
        color: "#f7df1e",
      },
      {
        Icon: DiHtml5,
        text: "HTML",
        color: "#ff6600",
      },
      {
        Icon: DiCss3,
        text: "CSS",
        color: "#264ee4",
      },
      {
        Icon: SiReact,
        text: "React",
        color: "#61dafb",
      },
      {
        Icon: DiSass,
        text: "Sass",
        color: "#cf649a",
      },
    ],
  },
  {
    title: "Gestion",
    Icon: FaToolbox,
    skills: [
      {
        Icon: DiGit,
        text: "Git",
        color: "#f44d27",
      },
      {
        Icon: DiScrum,
        text: "Scrum",
        color: "#666666",
      },
      {
        Icon: FaTrello,
        text: "Trello",
        color: "#227ff9",
      },
    ],
  },
];

export default data;
