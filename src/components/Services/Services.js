import "./styled.css";

const Services = () => {
  return (
    <div className="root_Services">
      <div className="container_Services">
        <div className="subTitle_Services">#услуги</div>
        <h2 className="title_Services">Комплекс услуг</h2>
        <div className="list_Services">
          <div className="list_item1_Services">
            <p className="list_title_Services">
              Проектирование <br />
              домов
            </p>
          </div>
          <div className="list_item2_Services">
            <p className="list_title_Services">
              Строительство <br />
              домов
            </p>
          </div>
          <div className="list_item3_Services">
            <p className="list_title_Services">Дизайн интерьера</p>
          </div>
          <div className="list_item4_Services">
            <p className="list_title_Services">Отделка</p>
          </div>
          <div className="list_item5_Services">
            <p className="list_title_Services">Меблирование</p>
          </div>
          <div className="list_item6_Services">
            <p className="list_title_Services">
              Система <br />
              Умный Дома
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
