import React from "react";
import ContactForm from "../components/ContactForm";
import "../components/ContactPage.css";

const ContactPage = () => {
  return (
    <div className="page">
      <div className="page-container">
        <div className="header-container">
          <div className="header">
            <h2 className="header-title">Feel free to send me a message with this quick form.</h2>
          </div>
        </div>
        <div className="content-container">
          <div className="content">
            <p className="content-text">
              <ContactForm />
            </p>
          </div>
          <div className="button-contaier">
            {/* this is where a button would go, if the page features a button. */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
