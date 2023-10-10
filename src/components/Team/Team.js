import "./styled.css";
import TeamPng from "../../assets/team/team.png";

const Team = () => {
  return (
    <div className="root_Team">
      <div className="container_Team">
        <div className="first_box_Team">
          <div>
            <div className="first_box_subTitle_Team">#команда</div>
            <h2 className="first_box_Title_Team">
              НАША КОМАНДА <br /> ПРОФЕССИОНАЛОВ
            </h2>
          </div>
          <img className="first_box_img_Team" src={TeamPng} />
        </div>
      </div>
    </div>
  );
};

export default Team;
