import { useEffect } from "react";
import s from "./App.module.scss";
import { keepTheme } from "../../utils/themes";

import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";
import Contact from "../../layouts/Contact/Contact";
import Footer from "../../layouts/Footer/Footer";

const App = () => {
  /**
   * Au chargement de la page, initialise le thème
   */
  useEffect(() => {
    keepTheme();
  }, []);
  return (
    <div className={s.container}>
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
