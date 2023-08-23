import "./index.css";
import FB from "../../assets/fb.svg";
import IG from "../../assets/ig.svg";
import LI from "../../assets/li.svg";
import TG from "../../assets/tg.svg";
import WA from "../../assets/wa.svg";
import FB_WHITE from "../../assets/fb-white.svg";
import IG_WHITE from "../../assets/ig-white.svg";
import LI_WHITE from "../../assets/li-white.svg";
import TG_WHITE from "../../assets/tg-white.svg";
import WA_WHITE from "../../assets/wa-white.svg";

interface FollowUsProps {
  className?: Object;
  links?: {
    [key: string]: string;
  };
}

const FollowUs: React.FC<FollowUsProps> = ({ className, links }) => {
  const medias = [
    {
      id: 1,
      img: className ? FB : FB_WHITE,
      name: "Facebook",
      link: links?.facebook,
    },
    {
      id: 2,
      img: className ? IG : IG_WHITE,
      name: "Instagram",
      link: links?.instagram,
    },
    {
      id: 3,
      img: className ? LI : LI_WHITE,
      name: "Linked In",
      link: links?.linkedin,
    },
    {
      id: 4,
      img: className ? TG : TG_WHITE,
      name: "Telegram",
      link: links?.telegram,
    },
    {
      id: 5,
      img: className ? WA : WA_WHITE,
      name: "Whats App",
      link: links?.whatsapp,
    },
  ];
  return (
    <div className={`${className} followUsContainer`}>
      <div className="verticalText">
        <span>Follow Us</span>
      </div>
      <div className="line"></div>
      <div className="socialMedias">
        {medias.map((media) => (
          <a href="/" className="media" key={media.id}>
            <img src={media.img} alt={media.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FollowUs;
