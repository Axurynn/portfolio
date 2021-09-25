import s from "./Contact.module.scss";

import { ReactComponent as Github } from "../../assets/github-alt.svg";
import { ReactComponent as Linkedin } from "../../assets/linkedin-alt.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { SiMinutemailer } from "react-icons/si";
import contactAvatar from "../../assets/contact-avatar.png";

const Contact = () => {
  return (
    <>
      <div className={s.contact}>
        <div className={s.division}>
          <div className={s.head}>
            <h1 className={s.title}>Marion Bricout</h1>
            <h3 className={s.subtitle}>Développeuse backend junior</h3>
          </div>
          <div className={s.illustration}>
            {/* En attendant, trouver mieux! */}
            <img
              className={s.picture}
              src={contactAvatar}
              alt="contactAvatar"
            />
          </div>
          <h2 className={s.contactTitle}>Contact</h2>
          <div className={s.content}>
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
        </div>
        <p className={s.copyright}>
          &copy; Fait avec <span>&#9825;</span> par Axurynn - 1.0.0
        </p>
      </div>
    </>
  );
};
export default Contact;
