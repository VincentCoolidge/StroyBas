import "./styled.css";
import OurWork1 from "../../assets/our-works/our-work_1.webp";
import OurWork2 from "../../assets/our-works/our-work_2.webp";
import OurWork3 from "../../assets/our-works/our_work_3.webp";
import OurWork4 from "../../assets/our-works/our_work_4.webp";
import OurWork5 from "../../assets/our-works/our_work_5.webp";
import OurWork6 from "../../assets/our-works/our_work_6.webp";

import PdfOurWork1 from "../../assets/pdf_our-works/1_file.pdf";
import PdfOurWork2 from "../../assets/pdf_our-works/2_file.pdf";
import PdfOurWork3 from "../../assets/pdf_our-works/3_file.pdf";
import PdfOurWork4 from "../../assets/pdf_our-works/4_file.pdf";
import PdfOurWork5 from "../../assets/pdf_our-works/5_file.pdf";
import PdfOurWork6 from "../../assets/pdf_our-works/6_file.pdf";

const OurWorks = () => {
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
    <div id="our_works" className="root_ourWorks">
      <div className="container_ourWorks">
        <div className="title_ourWorks">#наши работы</div>
        <p className={"sub_title_ourWorks"}>ВЫПОЛНЕНАЯ РАБОТА</p>
        <ul className="list_ourWorks">
          <li className="list_item_ourWorks">
            <div className="list_item_column_ourWorks">
              <img className="list_item_img_ourWorks" src={OurWork1} />
              <div className="list_item_title_ourWorks">
                Дом из кирпича <b>93 </b>кв.м. ПЧО, <b>3</b> спальни
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Стоимость <br /> строительства от
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">4190000</b>{" "}
                  <span className="list_item_right_2_price_ourWorks">руб</span>
                </div>
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Дата постройки
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">13.09.2023</b>
                </div>
              </div>
              <button
                onClick={() => onButtonClick(PdfOurWork1)}
                className="list_item_download-documents_ourWorks"
              >
                Скачать документ
              </button>
            </div>
          </li>
          <li className="list_item_ourWorks">
            <div className="list_item_column_ourWorks">
              <img className="list_item_img_ourWorks" src={OurWork2} />
              <div className="list_item_title_ourWorks">
                Дом из керамзито-бетонного блока с чистовой отделкой <b>310 </b>
                кв.м.
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Стоимость <br /> строительства от
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">9787000</b>{" "}
                  <span className="list_item_right_2_price_ourWorks">руб</span>
                </div>
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Дата постройки
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">28.10.2022</b>
                </div>
              </div>
              <button
                onClick={() => onButtonClick(PdfOurWork2)}
                className="list_item_download-documents_ourWorks"
              >
                Скачать документ
              </button>
            </div>
          </li>
          <li className="list_item_ourWorks">
            <div className="list_item_column_ourWorks">
              <img className="list_item_img_ourWorks" src={OurWork3} />
              <div className="list_item_title_ourWorks">
                Дом из кирпича <b>Poromax</b> <b>245 </b>кв.м. в ПЧО
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Стоимость <br /> строительства от
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">12436000</b>{" "}
                  <span className="list_item_right_2_price_ourWorks">руб</span>
                </div>
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Дата постройки
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">02.11.2022</b>
                </div>
              </div>
              <button
                onClick={() => onButtonClick(PdfOurWork3)}
                className="list_item_download-documents_ourWorks"
              >
                Скачать документ
              </button>
            </div>
          </li>
          <li className="list_item_ourWorks">
            <div className="list_item_column_ourWorks">
              <img className="list_item_img_ourWorks" src={OurWork4} />
              <div className="list_item_title_ourWorks">
                Дом из керамзито-бетонного блока. <b>145 </b>кв.м. в ПЧО
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Стоимость <br /> строительства от
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">6977000</b>{" "}
                  <span className="list_item_right_2_price_ourWorks">руб</span>
                </div>
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Дата постройки
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">11.11.2022</b>
                </div>
              </div>
              <button
                onClick={() => onButtonClick(PdfOurWork4)}
                className="list_item_download-documents_ourWorks"
              >
                Скачать документ
              </button>
            </div>
          </li>
          <li className="list_item_ourWorks">
            <div className="list_item_column_ourWorks">
              <img className="list_item_img_ourWorks" src={OurWork5} />
              <div className="list_item_title_ourWorks">
                Коммерческое здание с отделкой и мебелью. <b>182 </b>кв.м.
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Стоимость <br /> строительства от
                </div>
                <div className="list_item_right_price_ourWorks">
                  <b className="list_item_right_1_price_ourWorks">11434000</b>{" "}
                  <span className="list_item_right_2_price_ourWorks">руб</span>
                </div>
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Дата постройки
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">03.03.2023</b>
                </div>
              </div>
              <button
                onClick={() => onButtonClick(PdfOurWork5)}
                className="list_item_download-documents_ourWorks"
              >
                Скачать документ
              </button>
            </div>
          </li>
          <li className="list_item_ourWorks">
            <div className="list_item_column_ourWorks">
              <img className="list_item_img_ourWorks" src={OurWork6} />
              <div className="list_item_title_ourWorks">
                Дом из керамзито-бетонного блока. <b>88 </b>кв.м. в ПЧО
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Стоимость <br /> строительства от
                </div>
                <div className="list_item_right_price_ourWorks">
                  <b className="list_item_right_1_price_ourWorks">4690000</b>{" "}
                  <span className="list_item_right_2_price_ourWorks">руб</span>
                </div>
              </div>
              <div className="list_item_box_price_ourWorks">
                <div className="list_item_left_price_ourWorks">
                  Дата постройки
                </div>
                <div>
                  <b className="list_item_right_1_price_ourWorks">17.03.2023</b>
                </div>
              </div>
              <button
                onClick={() => onButtonClick(PdfOurWork6)}
                className="list_item_download-documents_ourWorks"
              >
                Скачать документ
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurWorks;
