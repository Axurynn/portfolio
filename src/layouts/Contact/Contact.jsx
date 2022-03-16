import s from "./Contact.module.scss";
import { useEffect, useState } from "react";
import { ReactComponent as Github } from "../../assets/github-alt.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin-alt.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import contactAvatarLight from "../../assets/contact-avatar-light.png";
import contactAvatarDark from "../../assets/contact-avatar-dark.png";
import { useWindowSize } from "../../utils/windowSize";
import { SiMinutemailer } from "react-icons/si";

import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = ({ state = false }) => {
  const [togContactAvatar, setTogContactAvatar] = useState(null);
  const { width } = useWindowSize();

  useEffect(() => {
    localStorage.getItem("theme") === "theme-dark"
      ? setTogContactAvatar(contactAvatarDark)
      : setTogContactAvatar(contactAvatarLight);
  }, [state]);

  return (
    <div className={s.contact} id="Contact">
      <div className={s.card}>
        <h2 className={s.contactTitle}>Contact</h2>
        <div className={s.container}>
          <div className={s.content}>
            <div className={s.head}>
              <h1 className={s.title}>Marion Bricout</h1>
              <h3 className={s.subtitle}>Développeuse backend</h3>
            </div>
            <p className={s.text}>
              Vous pouvez me retrouver sur mes réseaux <br /> ou directement
              m'écrire via le formulaire <SiMinutemailer />
            </p>
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
          </div>
          <div className={s.content}>
            <ContactForm />
          </div>
        </div>
      </div>
      <p className={s.copyright}>
        &copy; Fait avec <span>&#9825;</span> par Axurynn - 1.0.0
      </p>
    </div>
  );
};
export default Contact;
