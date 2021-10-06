import s from "./Projects.module.scss";
import "./dots.scss";

import portfolio from "../../assets/illu_portfolio.png";
import projet from "../../assets/fictif.jpg";
import Button from "../../components/Button/Button";
import Label from "../../components/Label/Label";
import { BsArrowRight } from "react-icons/bs";
/*! Mise en place d'un carousel (WIP)*/
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import SampleNextArrow from "../../components/CarouselArrow/SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "../../components/CarouselArrow/SamplePrevArrow/SamplePrevArrow";
import { useWindowSize } from "../../utils/windowSize";

const Projects = () => {
  /*! Mise en place d'un carousel (WIP)*/
  // const { width } = useWindowSize();
  // const settings = {
  //   arrows: true,
  //   dots: true,
  //   fade: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   nextArrow: <SampleNextArrow />,
  //   prevArrow: <SamplePrevArrow />,
  //   dotsClass: "test",
  //   mobileFirst: true,
  //   // autoplay: true,
  //   // autoplaySpeed: 1000,
  //   responsive: [
  //     {
  //       breakpoint: 1000,
  //       settings: {
  //         dots: true,
  //         arrows: true,
  //       },
  //     },
  //   ],
  // };
  const data = [
    {
      image: portfolio,
      alt: "vue du portfolio",
      title: "Portfolio",
      description:
        "Première version de mon portfolio, codé en ReactJS appris pour l'occasion. Mise en place d'un mode sombre.",
      url: "#",
      labels: [<Label text="React" />, <Label text="Sass" />],
    },
    {
      image: projet,
      alt: "projet2",
      title: "Projet2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cum?",
      url: "#",
      labels: [
        <Label text="Sequelize" />,
        <Label text="JavaScript" />,
        <Label text="NodeJS" />,
      ],
    },
    {
      image: projet,
      alt: "projet3",
      title: "Projet3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cum?",
      url: "#",
      labels: [],
    },
  ];
  return (
    <>
      <div className={s.head}>
        <h1 className={s.title}>Projets</h1>
      </div>
      <div className={s.container}>
        {/* <Slider {...settings}> */}
        {data.map(({ image, alt, title, description, url, labels }, i) => (
          <div key={i} className={s.containerCarousel} index={i + 1}>
            <img src={image} alt={alt} className={s.illu} />
            <div className={s.content}>
              <h2>{title}</h2>
              <div className={s.labels}>{labels.map((label) => label)}</div>
              <p className={s.description}>{description}</p>
              <div className={s.button}>
                <Button
                  text="Démonstration"
                  Icon={BsArrowRight}
                  callback={() => document.location.assign(url)}
                />
              </div>
            </div>
          </div>
        ))}
        {/* </Slider> */}
      </div>
    </>
  );
};
export default Projects;
