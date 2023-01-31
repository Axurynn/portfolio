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
                j'apprends en autonomie les bases en HTML5 &#x26; CSS3 et je me
                passionne pour l'interactivité générée avec JavaScript. Pour
                consolider les connaissances fraîchement acquises, je décide de
                me challenger et de réaliser quelques défis sur FrontEndMentor.{" "}
                <br /> <br />
                Attirée par l'<strong>algorithmie</strong> et la{" "}
                <strong>programmation</strong>, je décide de me reconvertir dans
                la conception de logiciels. Riche de mes précédentes expériences
                scientifiques et de mes nouvelles connaissances dans le
                développement web, je commence mon expérience professionnelle en
                tant que <strong>ingénieure développeuse</strong> chez{" "}
                SopraSteria.
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
