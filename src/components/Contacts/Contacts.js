import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./styled.css";

import email from "../../assets/contacts/email.png";
import location from "../../assets/contacts/location.png";
import phone from "../../assets/contacts/phone.png";
import documents from "../../assets/contacts/documents.png";
import organization from "../../assets/contacts/organization.png";

const Contacts = () => {
  return (
    <div id="contacts" className="root_Contacts">
      <div className="boxs_Contacts">
        <div className="box_Contacts">
          <YMaps
            query={{
              lang: "en_RU",
              ns: "use-load-option",
              load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
            }}
          >
            <div className="container_Map">
              <Map
                width="100%"
                height="100%"
                defaultState={{
                  center: [44.899862, 37.330381],
                  zoom: 19,
                  controls: ["zoomControl", "fullscreenControl"],
                }}
              >
                <Placemark
                  defaultGeometry={[44.899862, 37.330381]}
                  properties={{
                    balloonContentBody:
                      "StroyBas, ул. Крымская, дом 244, 3 этаж",
                  }}
                />
              </Map>
            </div>
          </YMaps>
        </div>
        <div className="box_Contacts">
          <p className="title_Contacts">Контакты</p>
          <div className={"block_flex_Contacts"}>
            <img className={"img_phone_Contacts"} src={phone} />
            <div className={"box_phone_Contacts"}>
              <div className={"title_phone_Contacts"}>Горячая линия</div>
              <div className={"subTitle_phone_Contacts"}>+7(918)69-99-833</div>
            </div>
          </div>
          <div className={"block_flex_Contacts"}>
            <img className={"img_location_Contacts"} src={location} />
            <div className={"box_location_Contacts"}>
              <div className={"title_location_Contacts"}>Центральный офис</div>
              <div className={"subTitle_location_Contacts"}>
                г.Анапа, ул.Крымская, дом 244, 3 этаж
              </div>
            </div>
          </div>
          <div className={"block_flex_Contacts"}>
            <img className={"img_email_Contacts"} src={email} />
            <div className={"box_email_Contacts"}>
              <div className={"title_email_Contacts"}>По все вопросам</div>
              <div className={"subTitle_email_Contacts"}>an.ProAnapu@ya.ru</div>
            </div>
          </div>
          <div className={"block_flex_Contacts block_flex_Contacts_documents"}>
            <img className={"img_documents_Contacts"} src={documents} />
            <div className={"box_documents_Contacts"}>
              <div className={"title_documents_Contacts"}>Документы</div>
              <div className={"subTitle_documents_Contacts"}>
                ИП Назмеев Ренат Ирекович; <br />
                ИНН 233710241804; <br />
                ОГРНИП 318237500471194 <br /> от 24.12.2018 года;
              </div>
            </div>
          </div>
          <div className={"block_flex_Contacts block_flex_Contacts_documents"}>
            <img className={"img_documents_Contacts"} src={organization} />
            <div className={"box_documents_Contacts"}>
              <div className={"title_documents_Contacts"}>Организация</div>
              <div className={"subTitle_documents_Contacts"}>
                Общество с ограниченной ответственностью «Стройбас»; <br />
                ИНН/КПП 2301112706/230101001; <br />
                ОГРН 1242300019103 <br /> от 05.04.2024 года;
                <br />
                Юридический адрес: Краснодарский край, МО Анапа, ул. Крымская
                216а.;
                <br />
                Тел. <a href="callto:89186999833">+79186999833</a>,{" "}
                <a href="mailto:uk.panorama@mail.ru">uk.panorama@mail.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
