import React from "react";
import "../assets/css/layout.css";
import html_icon from "../assets/image/skill/html.png";
import css_icon from "../assets/image/skill/css.png";
import sass_icon from "../assets/image/skill/sass.png";
import js_icon from "../assets/image/skill/js.png";
import react_icon from "../assets/image/skill/react.png";
import jquery_icon from "../assets/image/skill/jquery.png";
import aws_icon from "../assets/image/skill/aws.png";
import nodejs_icon from "../assets/image/skill/nodejs.png";
import jsp_icon from "../assets/image/skill/jsp.png";
import maria_db_icon from "../assets/image/skill/maria_db.png";
import git_icon from "../assets/image/skill/git.png";
import linux_icon from "../assets/image/skill/linux.svg";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Skill() {
  return (
    <div {...useScrollFadeIn("right", 1, 0)} className="full_page">
      <div className="container">
        <div className="title">Tech Skills</div>
        <div className="skill_container">
          <div className="skill_item">
            <div className="skill_category">Front-End</div>
            <div className="skills">
              <div className="skill">
                <img src={html_icon} alt=""></img>
                <span>HTML5</span>
              </div>
              <div className="skill">
                <img src={css_icon} alt=""></img>
                <span>CSS3</span>
              </div>
              <div className="skill">
                <img src={sass_icon} alt=""></img>
                <span>SASS</span>
              </div>
              <div className="skill">
                <img src={js_icon} alt=""></img>
                <span>JS ES6</span>
              </div>
              <div className="skill">
                <img src={jquery_icon} alt=""></img>
                <span>JQuery</span>
              </div>
              <div className="skill">
                <img src={react_icon} alt=""></img>
                <span>React JS</span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="skill_item">
            <div className="skill_category">Back-End</div>
            <div className="skills">
              <div className="skill">
                <img src={nodejs_icon} alt=""></img>
                <span>Node JS</span>
              </div>
              <div className="skill">
                <img src={jsp_icon} alt=""></img>
                <span>Jsp</span>
              </div>
              <div className="skill">
                <img src={maria_db_icon} alt=""></img>
                <span>Marai DB</span>
              </div>
            </div>
          </div>
          <div className="line"></div>
          <div className="skill_item">
            <div className="skill_category">DevOps</div>
            <div className="skills">
              <div className="skill">
                <img src={aws_icon} alt=""></img>
                <span>AWS</span>
              </div>
              <div className="skill">
                <img src={git_icon} alt=""></img>
                <span>Git</span>
              </div>
              <div className="skill">
                <img src={linux_icon} alt=""></img>
                <span>Linux</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
