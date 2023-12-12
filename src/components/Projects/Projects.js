import "./styled.css";

import Img11 from "../../assets/project/one-story/1_project/1.jpeg";
import Img12 from "../../assets/project/one-story/2_project/2.jpg";
import Img13 from "../../assets/project/one-story/3_project/3.jpg";
import Img21 from "../../assets/project/two-story/1_project/1.jpg";
import Img22 from "../../assets/project/two-story/2_project/2.jpg";
import Img23 from "../../assets/project/two-story/3_project/3.jpg";
import Img31 from "../../assets/project/attic/1_project/1.jpg";
import Img32 from "../../assets/project/attic/2_project/2.jpg";
import Img33 from "../../assets/project/attic/3_project/3.jpg";

import Project11 from "../../assets/project/one-story/1_project/1.pdf";
import Project12 from "../../assets/project/one-story/2_project/2.pdf";
import Project13 from "../../assets/project/one-story/3_project/3.pdf";
import Project21 from "../../assets/project/two-story/1_project/1.pdf";
import Project22 from "../../assets/project/two-story/2_project/2.pdf";
import Project23 from "../../assets/project/two-story/3_project/3.pdf";
import Project31 from "../../assets/project/attic/1_project/1.pdf";
import Project32 from "../../assets/project/attic/2_project/2.pdf";

const Projects = () => {
  const onButtonClick = (linkPdf) => {
    fetch(linkPdf).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "pdf_house";
        alink.click();
      });
    });
  };

  return (
    <div id="projects" className={"root_Projects"}>
      <div className={"principles_boxs_Projects"}>
        <div className={"principles_left_box__Projects"}>
          <p className={"principles_left_box_subTitle_Projects"}>#Принципы</p>
          <p className={"principles_left_box_title_Projects"}>
            ГАРАНТИЯ, ПРОВЕРЕННАЯ ВРЕМЕНЕМ
          </p>
          <p className={"principles_left_box_desc_Projects"}>
            Наш принцип работы основан на жёстком следовании стандартам
            качества, соблюдении сроков и обещаний, данных нашим заказчикам.
          </p>
        </div>
        <div className={"principles_right_boxs_Projects"}>
          <div className={"principles_right_box_Projects"}>
            <strong className={"principles_right_box_strong_Projects"}>
              47
            </strong>
            <div className={"principles_right_box_line_Projects"} />
            <span className={"principles_right_box_span_Projects"}>
              Дома построены в Анапском р-не
            </span>
          </div>
          <div className={"principles_right_box_Projects"}>
            <strong className={"principles_right_box_strong_Projects"}>
              14
            </strong>
            <div className={"principles_right_box_line_Projects"} />
            <span className={"principles_right_box_span_Projects"}>
              Специалистов в нашей команде
            </span>
          </div>
          <div className={"principles_right_box_Projects"}>
            <strong className={"principles_right_box_strong_Projects"}>
              6
            </strong>
            <div className={"principles_right_box_line_Projects"} />
            <span className={"principles_right_box_span_Projects"}>
              Лет на рынке загородного стоительства
            </span>
          </div>
          <div className={"principles_right_box_Projects"}>
            <strong className={"principles_right_box_strong_Projects"}>
              50
            </strong>
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
            <h3 className="projects_element1_title_box_Projects">
              Одноэтажные
            </h3>
            <div className="projects-flex-list">
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img11} />
                <div className="list_item_title_projects">
                  1 этаж, Площадь застройки 96,3 кв.м., Площадь здания 75,23
                  кв.м., 3 спальни
                </div>
                <button
                  onClick={() => onButtonClick(Project11)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
              <div className="list_item_column_projects">
                <img className="list_item_img_projects_contain" src={Img12} />
                <div className="list_item_title_projects">
                  1 этаж, Площадь застройки 124 кв.м., Площадь здания 82,8
                  кв.м., 3 спальни, 2 с/у, терраса
                </div>
                <button
                  onClick={() => onButtonClick(Project12)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img13} />
                <div className="list_item_title_projects">
                  1 этаж, Площадь застройки 156,8 кв.м., Площадь здания 110
                  кв.м., 4 спальни, 2 с/у, терраса
                </div>
                <button
                  onClick={() => onButtonClick(Project13)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
            </div>
          </div>
          <div className="projects_element2_box_Projects">
            <h3 className="projects_element2_title_box_Projects">Мансардные</h3>
            <div className="projects-flex-list">
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img31} />
                <div className="list_item_title_projects">
                  Мансардный, Площадь застройки 77 кв.м., Площадь здания 49
                  кв.м., 2 спальни. Подходит для участков с фасадом от 13
                  метров!
                </div>
                <button
                  onClick={() => onButtonClick(Project31)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img32} />
                <div className="list_item_title_projects">
                  Мансардный, Площадь застройки 107,2 кв.м., Площадь здания 70
                  кв.м., 2 спальни+гостевая комната, терраса
                </div>
                <button
                  onClick={() => onButtonClick(Project32)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img33} />
                <div className="list_item_title_projects">
                  Мансардный, Площадь застройки 107,2 кв.м., Площадь здания 70
                  кв.м., 2 спальни+гостевая комната, терраса
                </div>
                <button
                  // onClick={() => onButtonClick(Project33)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
            </div>
          </div>
          <div className="projects_element3_box_Projects">
            <h3 className="projects_element3_title_box_Projects">
              Двухэтажные
            </h3>
            <div className="projects-flex-list">
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img21} />
                <div className="list_item_title_projects">
                  2 этажа, Площадь застройки 127 кв.м., Площадь здания 163,6
                  кв.м., 4 спальни, кабинет, 2 с/у, терраса
                </div>
                <button
                  onClick={() => onButtonClick(Project21)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img22} />
                <div className="list_item_title_projects">
                  2 этажа, Площадь застройки 98,7 кв.м., Площадь здания 129
                  кв.м., 3 спальни, кабинет, 2 с/у, терраса
                </div>
                <button
                  onClick={() => onButtonClick(Project22)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
              <div className="list_item_column_projects">
                <img className="list_item_img_projects" src={Img23} />
                <div className="list_item_title_projects">
                  2 этажа, Площадь застройки 98,7 кв.м., Площадь здания 129
                  кв.м., 3 спальни, кабинет, 2 с/у, терраса
                </div>
                <button
                  // onClick={() => onButtonClick(Project23)}
                  className="list_item_download-documents_projects"
                >
                  Скачать проект
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
