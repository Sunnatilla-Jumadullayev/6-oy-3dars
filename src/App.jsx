import "./App.css";
import React from "react";
import Header from "./component/header/Header";
import Hero from "./component/hero/Hero";

import {
  title1,
  heroList1,
  heroImg1,
  heroName1,
  heroText1,
  heroColor1,
} from "./static";
import {
  title2,
  heroList2,
  heroImg2,
  heroName2,
  heroText2,
  heroColor2,
} from "./static";
import {
  title3,
  heroList3,
  heroImg3,
  heroName3,
  heroText3,
  heroColor3,
} from "./static";

function App() {
  return (
    <>
      <Header />
      <Hero
        title={title1}
        list={heroList1}
        image={heroImg1}
        name={heroName1}
        text={heroText1}
        color={heroColor1}
      />
      <Hero
        title={title2}
        list={heroList2}
        image={heroImg2}
        name={heroName2}
        text={heroText2}
        color={heroColor2}
      />
      <Hero
        title={title3}
        list={heroList3}
        image={heroImg3}
        name={heroName3}
        text={heroText3}
        color={heroColor3}
      />
    </>
  );
}

export default App;
export const header = () => {
  return <div>header</div>;
};
