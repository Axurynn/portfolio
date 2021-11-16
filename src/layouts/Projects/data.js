import portfolio from "../../assets/illu_portfolio.png";
import mentorme from "../../assets/mentorme.png";
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
    labels: [<Label text="React" />, <Label text="Sass" />],
  },
  {
    image: mentorme,
    alt: "projet en cours",
    title: "Mentor.me",
    description:
      "Réalisé en équipe de 5 développeurs, notre idée était de créer une plateforme gratuite réunissant des profils aux compétences variées souhaitant les partager et/ou en profiter. En tant que dev back end, j'ai mis en place l'API de l'application et configuré le serveur en NodeJS/Express",
    urlSite: "https://mentor-me-oclock.netlify.app/",
    urlCode: null,
    labels: [
      <Label text="React" />,
      <Label text="Sass" />,
      <Label text="Redux" />,
      <Label text="NodeJS" />,
      <Label text="Express" />,
      <Label text="PostgreSQL" />,
    ],
  },
];

export default data;
