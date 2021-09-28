import s from "./Projects.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import portfolio from "../../assets/illu_portfolio.png";
import projet from "../../assets/fictif.jpg";
import Button from "../../components/Button/Button";
import SampleNextArrow from "../../components/CarouselArrow/SampleNextArrow/SampleNextArrow";
import SamplePrevArrow from "../../components/CarouselArrow/SamplePrevArrow/SamplePrevArrow";
import { BsArrowRight } from "react-icons/bs";

const Projects = () => {
  const settings = {
    arrows: true,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // centerMode: true,
    // className: `center ${className}`,
    // centerPadding: "60px",
    // initialSlide: slidesToShow - 1,
  };
  const data = [
    {
      image: portfolio,
      alt: "vue du portfolio",
      title: "Portfolio",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cum?",
      url: "#",
    },
    {
      image: projet,
      alt: "projet2",
      title: "projet2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cum?",
      url: "#",
    },
    {
      image: projet,
      alt: "projet3",
      title: "projet3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, cum?",
      url: "#",
    },
  ];
  return (
    <>
      <div className={s.head}>
        <h1 className={s.title}>Projets</h1>
      </div>
      <Slider {...settings}>
        {data.map(({ image, alt, title, description, url }, i) => (
          <div key={i} className={s.containerCarousel} index={i + 1}>
            <img src={image} alt={alt} className={s.illu} />
            <h2>{title}</h2>
            <p>{description}</p>
            <Button
              text="Démonstration"
              Icon={BsArrowRight}
              callback={() => document.location.assign(url)}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};
export default Projects;
