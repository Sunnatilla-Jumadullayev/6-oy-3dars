import "./App.css";
import React from "react";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";

import { HERO__LIST } from "./static";
function App() {
  let PART = HERO__LIST.map((item, key) => (
    <Hero
      key={key}
      title={item.title}
      list={item.heroList}
      image={item.heroImg}
      name={item.heroName}
      text={item.heroText}
      color={item.heroColor}
    />
  ));
  return (
    <>
      <Header />

      {PART}
    </>
  );
}

export default App;
export const header = () => {
  return <div>header</div>;
};
