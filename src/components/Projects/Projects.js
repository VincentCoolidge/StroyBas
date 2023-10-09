import "./styled.css";

const Projects = () => (
  <div className={"root_Projects"}>
    <div className={"principles_boxs_Projects"}>
      <div className={"principles_left_box__Projects"}>
        <p className={"principles_left_box_subTitle_Projects"}>#Принципы</p>
        <p className={"principles_left_box_title_Projects"}>
          ГАРАНТИЯ, ПРОВЕРЕННАЯ ВРЕМЕНЕМ
        </p>
        <p className={"principles_left_box_desc_Projects"}>
          Наш принцип работы основан на жёстком следовании стандартам качества,
          соблюдении сроков и обещаний, данных нашим заказчикам.
        </p>
      </div>
      <div className={"principles_right_boxs_Projects"}>
        <div className={"principles_right_box_Projects"}>
          <strong className={"principles_right_box_strong_Projects"}>47</strong>
          <div className={"principles_right_box_line_Projects"} />
          <span className={"principles_right_box_span_Projects"}>
            Дома построены в Анапском р-не
          </span>
        </div>
        <div className={"principles_right_box_Projects"}>
          <strong className={"principles_right_box_strong_Projects"}>14</strong>
          <div className={"principles_right_box_line_Projects"} />
          <span className={"principles_right_box_span_Projects"}>
            Специалистов в нашей команде
          </span>
        </div>
        <div className={"principles_right_box_Projects"}>
          <strong className={"principles_right_box_strong_Projects"}>6</strong>
          <div className={"principles_right_box_line_Projects"} />
          <span className={"principles_right_box_span_Projects"}>
            Лет на рынке загородного стоительства
          </span>
        </div>
        <div className={"principles_right_box_Projects"}>
          <strong className={"principles_right_box_strong_Projects"}>50</strong>
          <div className={"principles_right_box_line_Projects"} />
          <span className={"principles_right_box_span_Projects"}>
            Проектов реализовано
          </span>
        </div>
      </div>
    </div>
    <div className={"projects_box_Projects"}>
      {/* <p
        className={classNames("principles_left_box_subTitle_Projects", {}, [])}
      >
        #Принципы
      </p> */}
    </div>
  </div>
);

export default Projects;
