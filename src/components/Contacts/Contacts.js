import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import "./styled.css";

const Contacts = () => {
  return (
    <div className="root_Contacts">
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
                  zoom: 18,
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
          <p>Контакты</p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
