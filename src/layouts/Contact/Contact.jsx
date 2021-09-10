import s from "./Contact.module.scss";

import { ReactComponent as Github } from "../../assets/github-alt.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin-alt.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Envelope } from "../../assets/envelope.svg";
import { SiMinutemailer } from "react-icons/si";
import contactAvatar from "../../assets/contact-avatar.png";

const Contact = () => {
  return (
    <>
      <div className={s.contact}>
        <div className={s.head}>
          <h1 className={s.title}>Marion Bricout</h1>
          <h2 className={s.subtitle}>Développeuse backend junior</h2>
        </div>
        <div className={s.illustration}>
          {/* En attendant, trouver mieux! */}
          <img className={s.picture} src={contactAvatar} alt="contactAvatar" />
        </div>
        <div className={s.content}>
          <h1 className={s.title}>Contact</h1>
          <p className={s.text}>
            Vous pouvez me contacter par{" "}
            <a className={s.mail} href="mailto:marion.bricout@protonmail.com">
              mail <SiMinutemailer />
            </a>{" "}
            ou me retrouver sur mes réseaux
          </p>
          <div className={s.network}>
            <a href="https://www.linkedin.com/in/marion-bricout/">
              <Linkedin />
            </a>
            <a href="https://twitter.com/Drc_Axu">
              <Twitter />
            </a>
            <a href="https://github.com/Axurynn">
              <Github />
            </a>
          </div>
        </div>
        <p className={s.copyright}>
          &copy; Fait avec <span>&#9825;</span> par Axurynn - 1.0
        </p>
      </div>
    </>
  );
};
export default Contact;
