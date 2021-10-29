import s from "./About.module.scss";

import Button from "../../components/Button/Button";
import KeyBoard from "../../assets/keyboard.jpg";
import { ReactComponent as Arrow } from "../../assets/down-arrow.svg";
import { AiFillCode } from "react-icons/ai";
import { GiCoffeeCup } from "react-icons/gi";

import pdf from "../../assets/cv.pdf";

const About = () => {
  const today = new Date();
  const firstDay = new Date("2021-05-24");
  const numberOfCoffees = () => {
    return Math.round(
      (2 * (today.getTime() - firstDay.getTime())) / (1000 * 3600 * 24)
    );
  };
  const numberOfCodingHours = () => {
    return Math.round(
      ((today.getTime() - firstDay.getTime()) / (1000 * 3600 * 24 * 7)) * 5 * 7
    );
  };
  return (
    <>
      <div className={s.about} id="About">
        <div className={s.head}>
          <h1 className={s.title}>A Propos</h1>
        </div>
        <div className={s.mainContainer}>
          <div className={s.illustration}>
            <img className={s.picture} src={KeyBoard} alt="keyboard" />
            <div className={s.codewars}>
              <a
                href="https://www.codewars.com/users/Axurynn"
                rel="noreferrer"
                target="_blank"
              >
                <p className={s.text}>Codewars</p>
                <img
                  src="https://www.codewars.com/users/Axurynn/badges/large"
                  className={s.number}
                  alt="badge codewars, lien vers mon profil"
                />
              </a>
            </div>
          </div>
          <div className={s.container}>
            <div className={s.content}>
              <h2 className={s.subtitle}>Qui suis-je ?</h2>
              <p className={s.text}>
                Après trois années en tant qu’ingénieure de recherche,
                j'apprends en autonomie les bases en <strong>HTML5</strong>{" "}
                &#x26; <strong>CSS3</strong> et je me passionne pour
                l'interactivité générée avec <strong>JavaScript</strong>. Pour
                consolider les connaissances fraîchement acquises, je décide de
                me challenger et de réaliser quelques défis sur FrontEndMentor.{" "}
                <br /> <br />
                Attirée par l'algorithme et la programmation, je décide de me
                reconvertir dans la conception de sites web. La formation
                intensive dispensée par l’école O’clock m’a permis d’acquérir
                rapidement toutes les connaissances techniques nécessaires et de
                les pratiquer quotidiennement, avec de nombreux challenges menés
                en autonomie ou en pair programming. Pendant cette formation, je
                découvre le <strong>back</strong>, les <strong>API</strong> et
                la <strong>gestion des data</strong>... C'est ce que je veux
                faire ! Je m'oriente donc vers le développement back end !{" "}
                <br /> <br />
                Riche de mes précédentes expériences scientifiques et de mes
                nouvelles connaissances dans le développement web, je suis
                aujourd'hui prête à mettre toutes mes compétences à votre
                service !
              </p>
              <div className={s.stats}>
                <div className={s.coffees}>
                  <p className={s.number}>{numberOfCoffees()}</p>
                  <p className={s.text}>
                    cafés{" "}
                    <span>
                      <GiCoffeeCup />
                    </span>
                  </p>
                </div>
                <div className={s.vscHours}>
                  <p className={s.number}>{numberOfCodingHours()}</p>
                  <p className={s.text}>
                    heures de code{" "}
                    <span>
                      <AiFillCode />
                    </span>
                  </p>
                </div>
              </div>
            </div>
            {/* Importe le component "button" qui est paramétrable et réutilisable partout, il suffit de modifier les champs text, Icon et callback (ce qu'il se passe au clic) */}
            <div className={s.button}>
              <a href={pdf} download>
                <Button text="Télécharger CV" Icon={Arrow} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
