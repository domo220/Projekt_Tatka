import { useState } from "react"; // 1. Import useState
import "./about.css";
import About_image from "./DSC_6231.jpg";
// Pokud používáš ant-design (viděl jsem v minulém kódu), můžeš použít ikonu,
// jinak použijeme CSS šipku (viz níže).
// import { DownOutlined } from "@ant-design/icons";

function About() {
  // 2. Stav pro rozbalení: false = zavřeno, true = otevřeno
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about_section">
      <span className="about_title">O NÁS</span>
      <div className="about_container">
        {/* Left side */}
        <div className="image_wrapper">
          <div className="about_square"></div>
          <img
            src={About_image}
            alt="podlaha_interier"
            className="about_image"
          />
        </div>

        {/* Right side */}
        <div className="about_text">
          {/* 3. Obalovací div pro text, který budeme zmenšovat/zvětšovat */}
          <div
            className={`text_content ${isExpanded ? "expanded" : "collapsed"}`}
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vlož sem
              potom ten finální text o podlahách. Jsme firma s dlouholetou
              tradicí a smyslem pro detail...Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Vlož sem potom ten finální text o
              podlahách. Jsme firma s dlouholetou tradicí a smyslem pro
              detail... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vlož sem potom ten finální text o podlahách. Jsme firma s
              dlouholetou tradicí a smyslem pro detail... Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vlož sem potom ten finální text
              o podlahách. Jsme firma s dlouholetou tradicí a smyslem pro
              detail... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vlož sem potom ten finální text o podlahách. Jsme firma s
              dlouholetou tradicí a smyslem pro detail...Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vlož sem potom ten finální text
              o podlahách. Jsme firma s dlouholetou tradicí a smyslem pro
              detail... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vlož sem potom ten finální text o podlahách. Jsme firma s
              dlouholetou tradicí a smyslem pro detail... Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vlož sem potom ten finální text
              o podlahách. Jsme firma s dlouholetou tradicí a smyslem pro
              detail... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vlož sem potom ten finální text o podlahách. Jsme firma s
              dlouholetou tradicí a smyslem pro detail... Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Vlož sem potom ten finální text
              o podlahách. Jsme firma s dlouholetou tradicí a smyslem pro
              detail...
            </p>
          </div>

          {/* 4. Tlačítko pro rozbalení */}
          <button className="read_more_btn" onClick={toggleReadMore}>
            {isExpanded ? "Zobrazit méně" : "Číst více"}
            {/* CSS šipka, která se bude otáčet */}
            <span className={`arrow ${isExpanded ? "up" : "down"}`}></span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
