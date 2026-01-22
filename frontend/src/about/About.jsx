import "./about.css";
import About_image from "./DSC_6231.jpg";

function About() {
  return (
    <section className="about_section">
      <span className="about_title">O NÁS</span>
      <div className="about_container">
        {/* Left side */}
        <div className="image_wrapper">
          <div className="about_square"></div> {/* obdelnik za obrazkem */}
          <img
            src={About_image}
            alt="podlaha_interier"
            className="about_image"
          />
        </div>
        {/* Rgiht side */}
        <div className="about_text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vlož sem
            potom ten finální text o podlahách. Jsme firma s dlouholetou tradicí
            a smyslem pro detail...Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vlož sem potom ten finální text o podlahách. Jsme
            firma s dlouholetou tradicí a smyslem pro detail... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vlož sem potom ten
            finální text o podlahách. Jsme firma s dlouholetou tradicí a smyslem
            pro detail... Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vlož sem potom ten finální text o podlahách. Jsme firma s
            dlouholetou tradicí a smyslem pro detail... Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vlož sem potom ten finální text o
            podlahách. Jsme firma s dlouholetou tradicí a smyslem pro
            detail...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vlož sem potom ten finální text o podlahách. Jsme firma s
            dlouholetou tradicí a smyslem pro detail... Lorem ipsum dolor sit
            amet, consectetur adipiscing elit. Vlož sem potom ten finální text o
            podlahách. Jsme firma s dlouholetou tradicí a smyslem pro detail...
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vlož sem
            potom ten finální text o podlahách. Jsme firma s dlouholetou tradicí
            a smyslem pro detail... Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vlož sem potom ten finální text o podlahách. Jsme
            firma s dlouholetou tradicí a smyslem pro detail... Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Vlož sem potom ten
            finální text o podlahách. Jsme firma s dlouholetou tradicí a smyslem
            pro detail...
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
