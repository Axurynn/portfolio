import s from "./About.module.scss";

import Button from "../../components/Button/Button";
import KeyBoard from "../../assets/keyboard.jpg";
import { ReactComponent as Arrow } from "../../assets/down-arrow.svg";

const About = () => {
  return (
    <>
      {/* code here */}
      <div className={s.about}>
        <div className={s.head}>
          <h1 className={s.title}>A Propos</h1>
          <h3 className={s.h3Title}>Introduction</h3>
        </div>
        <div className={s.illustration}>
          {/* En attendant, trouver mieux! Photo by <a href="https://unsplash.com/@emilep?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emile Perron</a> on <a href="https://unsplash.com/s/photos/computer?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
           */}
          <img className={s.picture} src={KeyBoard} alt="keyboard" />
        </div>
        <div className={s.content}>
          <h2 className={s.subtitle}>Qui suis-je ?</h2>
          <p className={s.text}>
            Après trois années en tant qu’ingénieur de recherche, j’ai souhaité
            me reconvertir dans la conception de sites web. La formation
            intensive dispensée par l’école O’clock m’a permis d’acquérir
            rapidement toutes les connaissances techniques nécessaires et de les
            pratiquer quotidiennement, avec de nombreux challenges menés en
            autonomie ou en pair programming.
          </p>
        </div>
        {/* Importe le component "button" qui est paramétrable et réutilisable partout, il suffit de modifier les champs text, Icon et callback (ce qu'il se passe au clic) */}
        <div className={s.button}>
          <Button
            text="Télécharger CV"
            Icon={Arrow}
            callback={() => console.log("CV")}
          />
        </div>
      </div>
    </>
  );
};
export default About;
