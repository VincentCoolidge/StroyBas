import { useState } from "react";

import Slider from "../components/Slider";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import CEO from "../components/CEO";
import Team from "../components/Team";
import OurWorks from "../components/OurWorks";
import Services from "../components/Services";
import Modal from "../components/Modal";

const Main = () => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <>
      <Slider />
      <Projects />
      <Team />
      <Services />
      <CEO />
      <OurWorks />
      <Contacts />
      <Modal active={modalActive} setActive={setModalActive} />
      <button onClick={() => setModalActive(true)}>test</button>
    </>
  );
};

export default Main;
