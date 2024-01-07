import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills">
      <h1>Skills</h1>
      <div className="skilled">
        <div>
          <div className="language">
            <img className="list" src="./image6.jpg" alt="" />
            <img className="list" src="./image7.jpg" alt="" />
          </div>
          <div className="language">
            <img className="list" src="./image10.jpg" alt="" />
            <img className="list" src="./image9.jpg" alt="" />
          </div>
        </div>
        <div className="portf">
          <img src="Group3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
