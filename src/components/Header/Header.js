import "./styled.css";

const Header = () => {
  return (
    <header className={"root_Header"}>
      <ul className={"list_Header"}>
        <li className={"element_Header element_Header_first"}>Проекты</li>
        <li className={"element_Header"}>Услуги</li>
        <li className={"element_Header"}>Наши работы</li>
        <li className={"element_Header"}>О нас</li>
        <li className={"element_Header element_Header_last"}>Контакты</li>
      </ul>
      <div>
        <a className={"linkPhone_Header"} href="callto:+7(918)69-99-833">
          +7(918)69-99-833
        </a>
      </div>
    </header>
  );
};

export default Header;
