import React, { useState } from "react";
import styles from "../styles/sections/ContactSection.module.scss";

const ContactSection: React.FC = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);

    // Ici tu peux connecter EmailJS, un backend Node/Symfony, etc.
  };


  return (
    <section className={styles.contactSection} id="contact">

      <header className={styles.header}>
        <h2>Contact</h2>
        <p>
          Have a project, an idea or a collaboration opportunity?
          Let's build something meaningful together.
        </p>
      </header>


      <div className={styles.container}>

        <div className={styles.info}>

          <h3>
            Let's work together
          </h3>

          <p>
            I am interested in software engineering,
            data engineering, robotics and innovative systems.
          </p>


          <div className={styles.links}>
            <a href="mailto:anthony@email.com">
              Email →
            </a>

            <a href="https://github.com" target="_blank">
              Github →
            </a>

            <a href="https://linkedin.com" target="_blank">
              LinkedIn →
            </a>
          </div>

        </div>



        <form 
          className={styles.form}
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />


          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />


          <textarea
            name="message"
            placeholder="Your message"
            rows={6}
            value={formData.message}
            onChange={handleChange}
          />


          <button type="submit">
            Send Message →
          </button>


        </form>

      </div>

    </section>
  );
};

export default ContactSection;