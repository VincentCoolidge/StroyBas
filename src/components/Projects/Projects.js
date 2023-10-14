import "./styled.css";

const Projects = () => (
  <div id="projects" className={"root_Projects"}>
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
    <div className="projects_box_Projects">
      <p className="principles_left_box_subTitle_Projects">#Проекты</p>
      <div className="projects_container_box_Projects">
        <div className="projects_element1_box_Projects">
          <h3 className="projects_element1_title_box_Projects">Одноэтажные</h3>
          <div className="projects_element1_line_box_Projects" />
          <div className="projects_element1_background_box_Projects"></div>
        </div>
        <div className="projects_element2_box_Projects">
          <h3 className="projects_element2_title_box_Projects">Мансардные</h3>
          <div className="projects_element2_line_box_Projects" />
          <div className="projects_element2_background_box_Projects"></div>
        </div>
        <div className="projects_element3_box_Projects">
          <h3 className="projects_element3_title_box_Projects">Двухэтажные</h3>
          <div className="projects_element3_line_box_Projects" />
          <div className="projects_element3_background_box_Projects"></div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
