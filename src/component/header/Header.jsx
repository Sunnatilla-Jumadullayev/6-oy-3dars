import React from "react";
import { logo } from "../../static";
import { HEADER_NAV, BUSINESS__NAV } from "../../static";
import "./header.scss";
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import SWiper from "../swiper/Swiper";

// funksiya

const Header = () => {
  let headerList = HEADER_NAV.map((link, key) => {
    return (
      <li className="header__item" key={key}>
        {link}
      </li>
    );
  });
  let businessList = BUSINESS__NAV.map((link, key) => {
    return (
      <li className="header__item" key={key}>
        {link}
      </li>
    );
  });

  return (
    <>
      <header className="container header">
        <img className="header__logo" src={logo} alt="samsung" />
        <nav>
          <ul className="header__list">{headerList}</ul>
        </nav>
        <nav>
          <ul className="header__list">{businessList}</ul>
        </nav>
        <div className="header__left">
          <CiSearch />
          <IoCartOutline />
          <VscAccount />
        </div>
      </header>
      <SWiper />
    </>
  );
};

export default Header;
