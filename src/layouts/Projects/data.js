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
    title: "Projet de fin de formation",
    description: "Projet en cours, description à venir.",
    urlSite: null,
    urlCode: null,
    labels: [],
  },
];

export default data;
