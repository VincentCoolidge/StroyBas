import "./styled.css";
import TeamPng from "../../assets/team/team.webp";

const Team = () => {
  return (
    <div id="about_us" className="root_Team">
      <div className="container_Team">
        <div className="first_box_Team">
          <div>
            <div className="first_box_subTitle_Team">#команда</div>
            <h2 className="first_box_Title_Team">
              НАША КОМАНДА <br /> ПРОФЕССИОНАЛОВ
            </h2>
            <iframe
              className="video_team"
              src="https://www.youtube.com/embed/gCHJtVvgOx4?si=cW2fYBU7JCffSGYm&amp;controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <img className="first_box_img_Team" src={TeamPng} />
        </div>
      </div>
    </div>
  );
};

export default Team;
