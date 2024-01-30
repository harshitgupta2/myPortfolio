import React from "react";
import "./about.css";
import ME from "../../assests/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className=" about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ years studying</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>clients</h5>
              <small>Searching </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>projects</h5>
              <small>10+ completed</small>
            </article>
          </div>

          <p>
          Dedicated and enthusiastic developer with a relentless passion for crafting exceptional digital solutions.
          Adept at embracing challenges and staying abreast of emerging technologies to create innovative and impactful applications.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
