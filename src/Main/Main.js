import { useState } from "react";

import CEO from "../components/CEO";
import Contacts from "../components/Contacts";
import Header from "../components/Header";
import OurWorks from "../components/OurWorks";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Team from "../components/Team";

const Main = () => {
  return (
    <>
      <Header />
      <Slider />
      <Projects />
      <Team />
      <Services />
      <CEO />
      <OurWorks />
      <Contacts />
    </>
  );
};

export default Main;
