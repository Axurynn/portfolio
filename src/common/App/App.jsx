import { useEffect } from "react";
import s from "./App.module.scss";
import { keepTheme } from "../../utils/themes";

import Skills from "../../layouts/Skills/Skills";
import Modal from "../../components/Modal/Modal";
import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";
import Contact from "../../layouts/Contact/Contact";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";

const App = () => {
  /**
   * Au chargement de la page, initialise le thème
   */
  useEffect(() => {
    keepTheme();
  }, []);
  return (
    <div className={s.container}>
      <Navbar />
      <Modal />
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
