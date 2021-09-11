import { useEffect, useState } from "react";
import s from "./SwitchTheme.module.scss";
import { setTheme } from "../../utils/themes";
import { ReactComponent as Sun } from "../../assets/sun.svg";
import { ReactComponent as Moon } from "../../assets/moon.svg";

/**
 * Composant pour gérer le changement de thème
 */
function SwitchTheme() {
  // En gros, initialisation de la variable et de la fonction pour changer cette variable
  const [togClass, setTogClass] = useState("dark");
  // Récupérer le thème enregistré en localStorage
  let theme = localStorage.getItem("theme");

  /**
   * Fonction qui gère ce qu'il se passe au click
   */
  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  /**
   * En gros, componentDidMount (quand le composant est chargé), [componentDidUpdate] (quand le composant est màj)
   */
  useEffect(() => {
    localStorage.getItem("theme") === "theme-dark"
      ? setTogClass("dark")
      : setTogClass("light");
  }, [theme]);

  return (
    <div>
      <span onClick={handleOnClick} className={s.switchTheme}>
        {togClass === "dark" ? <Sun /> : <Moon />}
      </span>
    </div>
  );
}

export default SwitchTheme;
