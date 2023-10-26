import "./styled.css";
import SocialNetworks from "../SocialNetworks";
import Logo from "../../assets/header/logo.webp";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [showBurger, setShowBurger] = useState(false);

  return (
    <header className="root_Header">
      <div className="container_Header">
        <ul
          className={
            showBurger
              ? ["list_Header", "list_Header_active"].join(" ")
              : ["list_Header"]
          }
        >
          <li className={"element_logo_Header"}>
            <img className="logo_header" src={Logo} />
            <h1 className="logo_title_header">
              Проектирование и строительство домов под ключ
            </h1>
          </li>
          <li className={"element_Header"}>
            <a className="link_Header" href="#projects">
              Проекты
            </a>
          </li>
          <li className={"element_Header"}>
            <a className="link_Header" href="#services">
              Услуги
            </a>
          </li>
          <li className={"element_Header"}>
            <a className="link_Header" href="#our_works">
              Наши работы
            </a>
          </li>
          <li className={"element_Header"}>
            <a className="link_Header" href="#about_us">
              О нас
            </a>
          </li>
          <li className={"element_Header element_Header_last"}>
            <a className="link_Header" href="#contacts">
              Контакты
            </a>
          </li>
        </ul>
        <div>
          <a className={"linkPhone_Header"} href="callto:89186999833">
            +7(918)69-99-833
          </a>
          <SocialNetworks />
        </div>
      </div>
      {/* <div onClick={() => setShowBurger(!showBurger)} className="burger_menu">
        {showBurger ? (
          <AiOutlineClose size={25} />
        ) : (
          <AiOutlineMenu size={25} />
        )}
      </div> */}
    </header>
  );
};

export default Header;
