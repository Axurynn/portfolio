import s from "./Header.module.scss";

import Button from "../../components/Button/Button";
import { ReactComponent as Github } from "../../assets/github-alt.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin-alt.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import Avatar from "../../assets/avatar.png";
import { ReactComponent as Send } from "../../assets/send.svg";
import { ReactComponent as Scroll } from "../../assets/scroll.svg";

const Header = () => {
  const today = new Date();
  const firstDay = new Date("2022-04-26");
  const monthDiff = () => {
    return (
      (today.getFullYear() - firstDay.getFullYear()) * 12 -
      firstDay.getMonth() +
      today.getMonth()
    );
  };

  return (
    <>
      <div className={s.header} id="Home">
        <div className={s.head}>
          <div className={s.network}>
            <a
              href="https://www.linkedin.com/in/marion-bricout/"
              rel="noreferrer"
              target="_blank"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com/Drc_Axu"
              rel="noreferrer"
              target="_blank"
            >
              <Twitter />
            </a>
            <a
              href="https://github.com/Axurynn"
              rel="noreferrer"
              target="_blank"
            >
              <Github />
            </a>
          </div>
          <div className={s.avatar}>
            <img className={s.picture} src={Avatar} alt="avatar" />
          </div>
        </div>
        <div className={s.desktopMiddle}>
          <div className={s.textButton}>
            <div className={s.content}>
              <h1 className={s.title}>
                Bonjour <br />
                et bienvenue !
              </h1>
              <h2 className={s.subtitle}>
                Je m'appelle Marion Bricout, je suis développeuse
              </h2>
              <p className={s.text}>
                En poste depuis {monthDiff()} mois et passionnée par la
                programmation et la création de logiciels.
              </p>
            </div>
            {/* Importe le component "button" qui est paramétrable et réutilisable partout, il suffit de modifier les champs text, Icon et callback (ce qu'il se passe au clic) */}
            <div className={s.button}>
              <Button
                text="Contactez-moi !"
                Icon={Send}
                callback={() =>
                  (window.location.href =
                    "mailto:marion.bricout@protonmail.com")
                }
              />
            </div>
          </div>
          <div className={s.infoScroll}>
            <Scroll />
            <p className={s.textScroll}>Défiler vers le bas</p>
          </div>
        </div>
        <div className={s.avatarDesktop}>
          <img className={s.picture} src={Avatar} alt="avatar" />
        </div>
      </div>
    </>
  );
};

export default Header;
