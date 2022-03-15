import { useState } from "react";
import axios from "axios";
import cx from "classnames";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const [user, setUser] = useState({
    lastname: "",
    sub: "",
    email: "",
    message: "",
  });

  const [messageSend, setMessageSend] = useState(false);

  const btnSend = cx({
    [`${s.btn}`]: !messageSend,
    [`${s.sendMessage}`]: messageSend,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    axios
      .post("https://axurynn-contact.herokuapp.com/contact", user)
      .then((res) => {
        if (res.status === 200) {
          setMessageSend(true);
          setUser({
            lastname: "",
            sub: "",
            email: "",
            message: "",
          });
        }
        setTimeout(() => {
          setMessageSend(false);
        }, 5000);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <form
        id="contact-form"
        method="POST"
        onSubmit={(e) => sendEmail(e)}
        className={s.form}
      >
        <label htmlFor="lastname" className={s.label}>
          Nom, prénom <span className={s.required}>*</span>
        </label>
        <input
          type="text"
          className={s.formInput}
          name="lastname"
          id="lastname"
          value={user.lastname}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="email" className={s.label}>
          Adresse mail <span className={s.required}>*</span>
        </label>
        <input
          type="email"
          className={s.formInput}
          name="email"
          id="email"
          pattern=".+\@.+\..+"
          value={user.email}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="subject" className={s.label}>
          Sujet du message <span className={s.required}>*</span>
        </label>
        <input
          type="text"
          className={s.formInput}
          name="sub"
          id="subject"
          value={user.sub}
          onChange={(e) => handleChange(e)}
          required
        />
        <label htmlFor="message" className={s.label}>
          Message <span className={s.required}>*</span>
        </label>
        <textarea
          rows="5"
          className={s.formInput}
          name="message"
          id="message"
          value={user.message}
          onChange={(e) => handleChange(e)}
          required
        ></textarea>
        <button type="submit" className={btnSend}>
          {messageSend ? "Message envoyé!" : "Envoyer le message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
