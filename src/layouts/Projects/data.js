import portfolio from "../../assets/illu_portfolio.png";
import projet from "../../assets/fictif.jpg";
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
    image: projet,
    alt: "projet en cours",
    title: "Mentor.me - En cours de développement.",
    description:
      "Réalisé en équipe de 5 développeurs, le projet a pour objectif de créer une plateforme réunissant des profils aux compétences variées souhaitant les partager et/ou en profiter.",
    urlSite: null,
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
