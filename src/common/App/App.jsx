import s from "./App.module.scss";
import Header from "../../layouts/Header/Header";
import About from "../../layouts/About/About";
import Contact from "../../layouts/Contact/Contact";

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <About />
      <Contact />
    </div>
  );
};

export default App;
