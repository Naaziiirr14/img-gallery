
import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <p className="about__eyebrow">Project</p>
        <h2 className="about__title">About us</h2>
      </div>
      <div className="about__body">
        <p className="about__text">
          “Stay pawsitive like a cat": functional components, props, and{" "}
          <code className="about__code">map()</code> to render a grid of image cards from
          sample data.
        </p>
      </div>
    </section>
  );
}

export default About;

