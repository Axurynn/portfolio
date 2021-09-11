import s from "./Footer.module.scss";
import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";
import { ReactComponent as Modal } from "../../assets/app.svg";

const Footer = () => {
  return (
    <div className={s.container}>
      <p className={s.text}>Axurynn</p>
      <div className={s.buttons}>
        <span>
          <SwitchTheme />
        </span>
        <span>
          <Modal />
        </span>
      </div>
    </div>
  );
};
export default Footer;
