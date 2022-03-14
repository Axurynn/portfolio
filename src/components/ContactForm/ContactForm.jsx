import s from "./ContactForm.module.scss";

const ContactForm = () => {
  return (
    <div>
      <form
        id="contact-form"
        method="POST"
        onSubmit={(e) => console.log(e)}
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
          required
        />
        <label htmlFor="subject" className={s.label}>
          Sujet du message <span className={s.required}>*</span>
        </label>
        <input
          type="text"
          className={s.formInput}
          name="subject"
          id="subject"
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
          required
        ></textarea>
        <button type="submit" className={s.btn}>
          Envoyer le message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
