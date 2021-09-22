import s from "./Modal.module.scss";
import { ReactComponent as Home } from "../../assets/home.svg";
import { ReactComponent as User } from "../../assets/user.svg";
import { ReactComponent as Files } from "../../assets/files.svg";
import { ReactComponent as Scenery } from "../../assets/scenery.svg";
import { ReactComponent as Send } from "../../assets/send.svg";
import { ReactComponent as Close } from "../../assets/close.svg";

const Modal = ({ open, setOpen }) => {
  const data = [
    {
      Icon: Home,
      text: "accueil",
      anchor: "#Home",
    },
    {
      Icon: User,
      text: "à propos",
      anchor: "#About",
    },
    {
      Icon: Files,
      text: "compétences",
      anchor: "#Skills",
    },
    {
      Icon: Scenery,
      text: "projets",
      anchor: "#Projects",
    },
    {
      Icon: Send,
      text: "contact",
      anchor: "#Contact",
    },
  ];
  return (
    <>
      {open ? (
        <>
          <div
            className={s.bg}
            onClick={() => {
              setOpen(!open);
            }}
          ></div>
          <div className={s.container}>
            <div
              className={s.closeModal}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <Close />
            </div>
            <div className={s.links}>
              {data.map(({ Icon, text, anchor }) => (
                <a className={s.link} href={anchor}>
                  <Icon />
                  <p classname={s.linkText}>{text}</p>
                </a>
              ))}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
