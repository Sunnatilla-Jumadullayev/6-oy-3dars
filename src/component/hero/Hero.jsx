import React from "react";
import "./Hero.scss";

const Hero = ({ title, list, image, name, text, color }) => {
  let HeroItem = list.map((link, index) => {
    return (
      <li className="hero__item" key={index}>
        {link}
      </li>
    );
  });

  return (
    <div
      className="hero container"
      style={{
        background: `url(${image})
        no-repeat center/cover`,
        color: `${color}`,
      }}
    >
      <h1 className="hero__title">{title}</h1>
      <ul className="hero__list">{HeroItem}</ul>
      <img className="hero__img" src={image} alt="imageList" />
      <h1 className="hero__name">{name}</h1>
      <p className="hero__text">{text}</p>
      <button className="hero__btn">Buy now</button>
    </div>
  );
};
export default Hero;
