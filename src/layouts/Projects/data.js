import portfolio from "../../assets/illu_portfolio.png";
import mentorme from "../../assets/mentorme.png";
import countries from "../../assets/illu_countries.jpg";
import Label from "../../components/Label/Label";

const data = [
  {
    image: portfolio,
    alt: "vue du portfolio",
    title: "Portfolio",
    description:
      "Première version de mon portfolio, codé en ReactJS appris pour l'occasion. Mise en place d'un mode sombre.",
    urlSite: "#Home",
    urlCode: "https://github.com/Axurynn/portfolio",
    urlDemo: null,
    labels: [<Label text="React" />, <Label text="Sass" />],
  },
  {
    image: mentorme,
    alt: "projet de fin d'études",
    title: "Mentor.me",
    description:
      "Réalisé en équipe de 5 développeurs, notre idée était de créer une plateforme gratuite réunissant des profils aux compétences variées souhaitant les partager et/ou en profiter. En tant que dev back end, j'ai mis en place l'API de l'application et configuré le serveur en NodeJS/Express.",
    urlSite: "https://mentor-me-oclock.netlify.app/",
    urlCode: "https://github.com/Axurynn/Mentor-me",
    urlDemo: "https://www.youtube.com/watch?v=2S5FSWNPA5g",
    labels: [
      <Label text="React" />,
      <Label text="Sass" />,
      <Label text="Redux" />,
      <Label text="NodeJS" />,
      <Label text="Express" />,
      <Label text="PostgreSQL" />,
    ],
  },
  {
    image: countries,
    alt: "solution du challenge de Frontend Mentor",
    title: "Countries",
    description:
      "Solution d'un challenge proposé par Frontend Mentor, codé en ReactJS autour de l'API REST Countries.",
    urlSite: "https://axurynn.github.io/countries/",
    urlCode: "https://github.com/Axurynn/countries",
    urlDemo: null,
    labels: [<Label text="React" />, <Label text="Sass" />],
  },
];

export default data;
