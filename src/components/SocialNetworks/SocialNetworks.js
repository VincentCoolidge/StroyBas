import InstagramIcon from "../../assets/socialnetworks/instagram.png";
import WaIcon from "../../assets/socialnetworks/whatsup.png";
import TIcon from "../../assets/socialnetworks/telegram.png";

import "./styled.css";

const SocialNetworks = () => {
  return (
    <ul className="list_SocialNetworks">
      <li className="element_SocialNetworks">
        <a href="https://instagram.com/stroybas?utm_source=qr" target="_blank">
          <img className="img_SocialNetworks" src={InstagramIcon} />
        </a>
      </li>
      <li>
        <a href="https://wa.me/79186999833" target="_blank">
          <img className="img_SocialNetworks" src={WaIcon} />
        </a>
      </li>
      <li>
        <a href="https://t.me/nik_renat" target="_blank">
          <img className="img_SocialNetworks" src={TIcon} />
        </a>
      </li>
    </ul>
  );
};

export default SocialNetworks;
