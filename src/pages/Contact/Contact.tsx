import React from "react";
// import Header from "../../sections/Header";
// import  Footer from "../../sections/Footer";


const IconContactLink: React.FC<{ nameField: string; href: string; label: string }> = ({nameField, href, label }) => (
  <li className="iconContactLink">
    {nameField} :
    <a href={href} target="_blank" rel="noreferrer">
      {label}
    </a>
  </li>
);

const Contact: React.FC = () => {
  const mailtoLink: string = "mailto:moussavou.anthony@outlook.com";
  const githubLink: string = "https://github.com/ton-profil";
  const linkedinLink: string = "https://linkedin.com/in/ton-profil";

  return (
    <div className="bodyMainPage">
      <div className="containterPage">
          <div className="contact-page">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you! Please reach out with any questions or inquiries.</p>

            <ul>
              <IconContactLink nameField="Email" href={mailtoLink} label="Envoyer moi un email" />
              <IconContactLink nameField="GitHub" href={githubLink} label="Mon profil GitHub" />
              <IconContactLink nameField="LinkedIn" href={linkedinLink} label="Mon profil LinkedIn" />
            </ul>
          </div>
      </div>

    </div>
  );
};

export default Contact;