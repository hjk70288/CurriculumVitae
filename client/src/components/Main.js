import React, { useEffect } from "react";
import "../assets/css/layout.css";
import profile from "../assets/image/profile.jpg";
import github_icon from "../assets/image/contact/github.svg";
import phone_icon from "../assets/image/contact/phone.svg";
import email_icon from "../assets/image/contact/email.svg";
import Header from "./Header";
import Experience from "./Experience";
import Skill from "./Skill";
import License from "./License";
import Footer from "./Footer";
import useScrollFadeIn from "../hooks/useScrollFadeIn";

function Main() {
  // 화면 크기 변경 시 이벤트 핸들링
  const handelResizeWindow = () => {
    // 사용자가 컴퓨터 환경인지 모바일 환경인지 판단
    const userInfo = navigator.userAgent;
    let isMobile = false;
    if (userInfo.indexOf("iPhone") > -1 || userInfo.indexOf("Android") > -1) {
      isMobile = true;
    }

    // 모바일 환경일 땐 새로고침 X (하단 바 생김에 따라 무한 새로고침되는 현상 막기)
    if (!isMobile) {
      window.addEventListener("resize", () => {
        window.location.reload();
      });
    }
  };

  // 휴대폰 가로 세로 방향 변경 시 이벤트 핸들링
  const handleChangeOrientation = () => {
    window.addEventListener("resize", () => {
      window.location.reload();
    });
  };

  useEffect(() => {
    // 화면 크기 변경 시 이벤트 핸들링
    window.addEventListener("resize", handelResizeWindow);

    // 휴대폰 가로 세로 방향 변경 시 이벤트 핸들링
    window.addEventListener("orientationchange", handleChangeOrientation);

    return () => {
      window.removeEventListener("resize", handelResizeWindow);
      window.removeEventListener("orientationchange", handleChangeOrientation);
    };
  }, []);

  return (
    <>
      <Header />
      <div {...useScrollFadeIn("right", 1, 0)} className="full_page">
        <div className="container">
          <h3 className="me">안녕하세요. 개발자 김용민 입니다!</h3>
          <div className="contact">
            <div className="profile_wrap">
              <img className="profile" src={profile} alt=""></img>
            </div>
            <div className="content">
              <div className="title">Contact</div>
              <p>
                <img src={email_icon} alt="" /> <b>kimyongmin1228@gmail.com</b>
              </p>
              <p>
                <img src={phone_icon} alt="" /> <b>010-3703-0728</b>
              </p>
              <a href="https://github.com/hjk70288">
                <p>
                  <img src={github_icon} alt="" /> <b>https://github.com/hjk70288</b>
                </p>
              </a>
            </div>
          </div>
          <div className="line"></div>
          <div className="title">Introduce</div>
          <div className="introduce">
            <div className="content">Node + React를 주로 사용하여 웹 개발을 하고 있습니다.</div>
            <div className="content">
              새로운 것에 대해 익히고 경험하는 것을 두려워하지 않습니다.
              <br />
              미지의 영역에 발을 내딛는 것은 오히려 저에게 큰 동기입니다.
            </div>
            <div className="content">
              반복적이고 비효율적인 과정을 개선하는 것을 좋아합니다.
              <br />
              동료의 업무 처리 효과를 향상시키기 위해 백오피스의 기능을 자동화시킨 경험이 있습니다.
            </div>
          </div>
        </div>
      </div>
      <Experience />
      <Skill />
      <License />
      <Footer />
    </>
  );
}

export default Main;
