import React from "react";
import "../styles/Skills.css";

const Portfolio = () => {
  return (
    <section className="skills">
      <h1>Portfolio</h1>
      <div className="portfolio">
      <div className="portf">
        <img src="Group2.png" alt="" />
      </div>
      <div className="lange">
        <div className="language">
          <a href="https://responsive-resume-builder.vercel.app/"><img className="list" src="./image2.png" alt="" /></a>
        <a href="https://dash-board-react-theta.vercel.app/"><img className="list" src="./image13.png" alt="" /></a>
        </div>
        <div className="language">
         <a href="https://react-ecommerce-three-vert.vercel.app/"><img className="list" src="./image11.jpg" alt="" /></a>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
