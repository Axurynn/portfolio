import { useState, useEffect } from "react";
import s from "./App.module.scss";
import { keepTheme } from "../../utils/themes";

import Skills from "../../layouts/Skills/Skills";
import Modal from "../../components/Modal/Modal";
import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";
import Projects from "../../layouts/Projects/Projects";
import Contact from "../../layouts/Contact/Contact";
import Footer from "../../layouts/Footer/Footer";
import Navbar from "../../layouts/Navbar/Navbar";

const App = () => {
  /**
   * Au chargement de la page, initialise le thème
   */
  const [state, setState] = useState(false);

  useEffect(() => {
    keepTheme();
  }, []);
  return (
    <div className={s.container}>
      <ul className={s.a11yNav}>
        <li className={s.a11yNavItem}>
          <a href="#Home" className={s.a11yNavLink}>
            Passer directement à l'accueil
          </a>
        </li>
        <li className={s.a11yNavItem}>
          <a href="#About" className={s.a11yNavLink}>
            À propos
          </a>
        </li>
        <li className={s.a11yNavItem}>
          <a href="#Skills" className={s.a11yNavLink}>
            Compétences
          </a>
        </li>
        <li className={s.a11yNavItem}>
          <a href="#Projects" className={s.a11yNavLink}>
            Projets
          </a>
        </li>
        <li className={s.a11yNavItem}>
          <a href="#Contact" className={s.a11yNavLink}>
            Me contacter
          </a>
        </li>
      </ul>
      <nav>
        <Navbar state={state} setState={setState} />
        <Modal />
      </nav>
      <header>
        <Header />
      </header>
      <main>
        <section>
          <About />
        </section>
        <section>
          <Skills />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact state={state} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
