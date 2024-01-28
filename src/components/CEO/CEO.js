import "./styled.css";

const CEO = () => {
  return (
    <div className="root_CEO">
      <div className="container_CEO">
        <div className="box_CEO">
          <div className="sub-title_box_CEO">#подход</div>
          <div className="row_box_CEO">
            <div className="column_title_box_CEO">
              МИССИЯ <br /> КОМПАНИИ
            </div>
            <div className="column_info_CEO_box_CEO">
              <span className="column_info_subTitle_CEO_box_CEO">
                Исполнительный директор
              </span>
              <h3 className="column_info_title_CEO_box_CEO">Ренат Назмеев</h3>
            </div>
          </div>
          <div className="description_box_CEO">
            <div className="description_text_box_CEO">
              Мы даём людям уверенность и надежность, делаем их жизнь лучше,
              помогая реализовать устремление и мечты!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEO;
