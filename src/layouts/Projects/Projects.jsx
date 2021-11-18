import s from "./Projects.module.scss";

import Button from "../../components/Button/Button";
import data from "./data";
import { BsArrowRight, BsCode } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";

const Projects = () => {
  return (
    <div className={s.fullContainer} id="Projects">
      <div className={s.head}>
        <h1 className={s.title}>Projets</h1>
      </div>
      <div className={s.container}>
        {data.map(
          (
            {
              image,
              alt,
              title,
              description,
              urlSite,
              urlCode,
              urlDemo,
              labels,
            },
            i
          ) => (
            <article key={i} className={s.containerCarousel} index={i + 1}>
              <img src={image} alt={alt} className={s.illu} />
              <div className={s.content}>
                <h2>{title}</h2>
                <div className={s.labels}>
                  {labels.map((label, i) => (
                    <span key={i}>{label}</span>
                  ))}
                </div>
                <p className={s.description}>{description}</p>
                <div className={s.buttons}>
                  {urlSite && (
                    <div className={s.button}>
                      <Button
                        text="Lien"
                        Icon={BsArrowRight}
                        callback={() => window.open(urlSite, "_blank")}
                      />
                    </div>
                  )}
                  {urlCode && (
                    <div className={s.button}>
                      <Button
                        text="GitHub"
                        Icon={BsCode}
                        callback={() => window.open(urlCode, "_blank")}
                      />
                    </div>
                  )}
                  {urlDemo && (
                    <div className={s.button}>
                      <Button
                        text="Démo"
                        Icon={AiOutlineYoutube}
                        callback={() => window.open(urlDemo, "_blank")}
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          )
        )}
      </div>
    </div>
  );
};

export default Projects;
