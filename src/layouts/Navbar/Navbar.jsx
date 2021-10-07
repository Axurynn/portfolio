import s from "./Navbar.module.scss";
import SwitchTheme from "../../components/SwitchTheme/SwitchTheme";

const Navbar = ({ state = false, setState = () => {} }) => {
  const links = [
    {
      name: "Accueil",
      route: "#Home",
    },
    {
      name: "À propos",
      route: "#About",
    },
    {
      name: "Compétences",
      route: "#Skills",
    },
    {
      name: "Projets",
      route: "#Projects",
    },
    {
      name: "Contact",
      route: "#Contact",
    },
  ];
  return (
    <>
      <div className={s.container}>
        <a href="#Home">
          <p className={s.text}>Axurynn</p>
        </a>
        <div className={s.links}>
          {links.map(({ name, route }, i) => (
            <a key={i} className={s.link} href={route}>
              {name}
            </a>
          ))}
        </div>
        <div className={s.buttons}>
          <span>
            <SwitchTheme state={state} setState={setState} />
          </span>
        </div>
      </div>
    </>
  );
};
export default Navbar;
