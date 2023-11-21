import React from "react";
import "../index.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1>Portfolio</h1>
      <h3>Here are my some projects </h3>
      <div className="project">
        <a href="https://responsive-resume-builder.vercel.app/">
          <img src="./image2.png" alt="" />
        </a>
        <a href="https://react-ecommerce-demo-phi.vercel.app/">
          <img src="./image3.webp" alt="" />
        </a>
      </div>
      <div className="project">
        <a href="https://todo-project-delta.vercel.app/">
          <img src="./image4.png" alt="" />
        </a>
        <a href="https://react-login-page-mu.vercel.app/">
          {" "}
          <img src="./image5.avif" alt="" />
        </a>
      </div>
    </section>
  );
};

export default Portfolio;
