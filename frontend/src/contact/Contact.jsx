import "./contact.css";
// Importujeme ikony z balíčku react-icons
import {
  FaPhoneAlt,
  FaFacebookF,
  FaRegEnvelope,
  FaInstagram,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEVÁ ČÁST: Text a ikony */}
        <div className="contact-info">
          <h2 className="contact-title">KONTAKTUJTE NÁS</h2>
          <p className="contact-desc">
            LOREM IPSUM DOLOR SIT AMET CONSECTETUR. INTEGER ALIQUAM DIGNISSIM
            RISUS IN SED IMPERDIET POTENTI SIT. QUAM A RISUS UT NEQUE QUIS
            GRAVIDA FAUCIBUS TORTOR UT.
          </p>

          <div className="social-icons">
            <a href="#" className="icon-link">
              <FaPhoneAlt />
            </a>
            <a href="#" className="icon-link">
              <FaFacebookF />
            </a>
            <a href="#" className="icon-link">
              <FaRegEnvelope />
            </a>
            <a href="#" className="icon-link">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* PRAVÁ ČÁST: Formulář */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            {/* První řádek: Jméno a Příjmení vedle sebe */}
            <div className="form-row">
              <input
                type="text"
                placeholder="ZADEJTE JMENO"
                className="form-input"
              />
              <input
                type="text"
                placeholder="ZADEJTE PŘÍJMENÍ"
                className="form-input"
              />
            </div>

            {/* Email na celý řádek */}
            <input
              type="email"
              placeholder="ZADEJTE VALIDNÍ EMAILOVOU ADRESU"
              className="form-input full-width"
            />

            {/* Textarea pro zprávu */}
            <textarea
              placeholder="ZPRÁVA PRO NÁS"
              className="form-textarea full-width"
            ></textarea>

            {/* Tlačítko (volitelné, na obrázku není vidět odesílací tlačítko, ale formulář ho potřebuje) */}
            {/* <button type="submit">ODESLAT</button> */}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
