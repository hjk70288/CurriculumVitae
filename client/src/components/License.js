import React from "react";
import "../assets/css/layout.css";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function License() {
  return (
    <div {...useScrollFadeIn("left", 1, 0)} className="full_page">
      <div className="container">
        <div className="title">License and Certificate</div>
        <div className="license">
          <div>
            <b>자격증</b>
          </div>
          <ul>
            <li>정보처리기사(2021.08.20)</li>
          </ul>
          <div>
            <b>교내 수상 경력</b>
          </div>
          <ul>
            <li>2019 KPU 소프트웨어 경진대회 장려상 수상(2019.10)</li>
            <li>2020 KPU 소프트웨어 경진대회 장려상 수상(2020.10)</li>
          </ul>
        </div>
        <div className="line"></div>

        <div className="title">Education</div>
        <div className="education">2018.02-2022.02 한국산업기술대학교 컴퓨터공학과</div>
      </div>
    </div>
  );
}

export default License;
