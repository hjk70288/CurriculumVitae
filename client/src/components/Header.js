import React, { useState, useEffect } from "react";
import "../assets/css/layout.css";

function Header() {
  const [pagePoints, setPagePoints] = useState([]);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  useEffect(() => {
    let pagesYOffset = 0;
    const pages = document.querySelectorAll(".full_page");
    const pagePointsItem = [];
    for (let pageIndex = 0; pageIndex < pages.length; pageIndex++) {
      pagePointsItem.splice(pageIndex, 1, pagesYOffset);
      pagesYOffset += pages[pageIndex].getBoundingClientRect().height + window.innerHeight / 10;
    }
    setPagePoints(pagePointsItem);
  }, []);

  const Menus = () => {
    return (
      <div className="menu_wraper">
        <div
          onClick={() => {
            if (isOpenMenu) setIsOpenMenu(false);
            window.scrollTo(0, 0);
          }}
          className="menu"
        >
          Contact & Introduce
        </div>
        <div
          onClick={() => {
            if (isOpenMenu) setIsOpenMenu(false);
            window.scrollTo(0, pagePoints[1]);
          }}
          className="menu"
        >
          Work Experience
        </div>
        <div
          onClick={() => {
            if (isOpenMenu) setIsOpenMenu(false);
            window.scrollTo(0, pagePoints[2] - window.innerHeight / 15);
          }}
          className="menu"
        >
          Tech Skills
        </div>
        <div
          onClick={() => {
            if (isOpenMenu) setIsOpenMenu(false);
            window.scrollTo(0, pagePoints[3]);
          }}
          className="menu"
        >
          License and Certificate & Education
        </div>
      </div>
    );
  };

  return (
    <>
      {isOpenMenu ? (
        <>
          <div className="shadow"></div>
          <div className="hamburger_menu">
            <Menus />
          </div>
        </>
      ) : null}

      <div className="header">
        <div
          className="header_title"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          KYM
        </div>
        <Menus />
        <div
          className={`hamburger ${isOpenMenu ? "open_hamberger" : ""}`}
          onClick={() => {
            setIsOpenMenu(!isOpenMenu);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

export default Header;
