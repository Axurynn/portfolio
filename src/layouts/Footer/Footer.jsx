import s from "./Footer.module.scss";
import { useState } from "react";
import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";
import Modal from "../../components/Modal/Modal";
import { ReactComponent as Menu } from "../../assets/app.svg";

const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal open={open} setOpen={setOpen} />
      <div className={s.container}>
        <p className={s.text}>Axurynn</p>
        <div className={s.buttons}>
          <span>
            <SwitchTheme />
          </span>
          <span onClick={() => setOpen(!open)}>
            <Menu />
          </span>
        </div>
      </div>
    </>
  );
};
export default Footer;
