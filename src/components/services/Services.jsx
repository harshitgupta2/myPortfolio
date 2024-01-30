import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Custom website design and development tailored to client requirements.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Responsive design to ensure optimal viewing across various devices.</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>HTML, CSS, and JavaScript development for creating the user interface and user experience (UI/UX).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of front-end frameworks like React</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-End Finesse: Proficient in creating pixel-perfect user interfaces with HTML5, CSS3, and JavaScript. </p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>Back-End Brilliance: A master of server-side scripting using</p>
            </li>

            <li>
              <BiCheck className="service__list-icon" />
              <p>API Artistry: Crafting seamless connections between different software systems through the development of efficient and RESTful APIs.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  );
};

export default Services;
