import Header from "../Header";
import EcosystemIcon from "../../assets/info/5.svg";
import SagesIcon from "../../assets/info/6.svg";
import ClubIcon from "../../assets/info/7.svg";
import AmbassadorIcon from "../../assets/info/8.svg";
// import VolunteersIcon from "../../assets/info/9.svg";
import ExpertIcon from "../../assets/info/10.svg";
import PartnersIcon from "../../assets/info/11.svg";
import FriendsIcon from "../../assets/info/12.svg";
import SAGES from "../../assets/info/sages.svg";
import CLUB from "../../assets/info/club.svg";
import AMBASSDOR from "../../assets/info/ambassador.svg";
// import VOLUNTEERS from "../../assets/info/volunteers.svg";
import EXPERT from "../../assets/info/expert.svg";
import PARTNERS from "../../assets/info/partners.svg";
import FRIENDS from "../../assets/info/fond.svg";
import ROSGOSTRAKH from "../../assets/info/rostgostrakh.svg";
import BETCONSTRUCT from "../../assets/info/betconstruct.png";
import DIGITAIN from "../../assets/info/digitain.png";
import Background from "../Background";
import SIDE_PATTERN_2 from "../../assets/patterns/side-2.svg";
import SIDE_PATTERN_2_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { HeaderTypes } from "../../utils/api.types";
import { HeaderKeyOf } from "../../utils/keyof.type";

interface EcosystemProps {
  lang: string;
}

const Ecosystem: React.FC<EcosystemProps> = ({ lang }) => {
  const { t } = useTranslation();
  const {
    ourEcosystem,
    sages,
    club301,
    ambassadors,
    experts,
    partnerInfo,
    foundationFriends,
  } = useSelector((state: RootState) => state.homeData.data);
  const data = [
    {
      id: 1,
      title: sages[0][`title_${lang}` as keyof HeaderTypes],
      headerIcon: SagesIcon,
      description: sages[0][`description_${lang}` as keyof HeaderTypes],
      mainImg: SAGES,
      btn: [
        {
          name: t("btns.learn-more"),
          link: "sages",
        },
      ],
      btnStyle: [
        {
          // padding: "13px 40px",
          color: "#000",
        },
      ],
    },
    {
      id: 2,
      title: club301[0][`title_${lang}` as keyof HeaderTypes],
      headerIcon: ClubIcon,
      description: club301[0][`description_${lang}` as keyof HeaderTypes],
      mainImg: CLUB,
      btn: [
        {
          name: t("btns.become-301"),
          link: "",
        },
        {
          name: t("btns.learn-more"),
          link: "club301",
        },
      ],
      btnStyle: [
        {
          background: "#189387",
          color: "#fff",
          // padding: "13px 40px",
          boxShadow: "-21px 16px 38px 0px rgba(24, 147, 135, 0.38)",
          border: "none",
        },
        {
          border: "1px solid #189387",
          // padding: "13px 40px",
          color: "#000",
        },
      ],
    },
    {
      id: 3,
      title: ambassadors[0][`title_${lang}` as keyof HeaderTypes],
      headerIcon: AmbassadorIcon,
      description: ambassadors[0][`description_${lang}` as keyof HeaderTypes],
      mainImg: AMBASSDOR,
      btn: [
        {
          name: t("btns.become-ambassador"),
          link: "",
        },
      ],
      btnStyle: [
        {
          background: "#EE8842",
          color: "#fff",
          // padding: "13px 40px",
          border: "none",
          boxShadow: " -21px 16px 38px 0px rgba(238, 136, 66, 0.42)",
        },
      ],
    },
    {
      id: 5,
      title: experts[0][`title_${lang}` as keyof HeaderTypes],
      headerIcon: ExpertIcon,
      description: experts[0][`description_${lang}` as keyof HeaderTypes],
      mainImg: EXPERT,
      btn: [
        {
          name: t("btns.become-expert"),
          link: "",
        },
      ],
      btnStyle: [
        {
          background: " #42CFEE",
          border: "none",
          // padding: "13px 40px",
          color: "#fff",
          boxShadow: "-21px 16px 38px 0px rgba(66, 207, 238, 0.36)",
        },
      ],
    },
    {
      id: 6,
      title: partnerInfo[0][`title_${lang}`],
      headerIcon: PartnersIcon,
      description: partnerInfo[0][`description_${lang}`],
      mainImg: PARTNERS,
      btn: [
        {
          name: t("btns.become-partner"),
          link: "",
        },
        {
          name: t("btns.all-partners"),
          link: "",
        },
      ],
      btnStyle: [
        {
          background: "#C12DD9",
          color: "#fff",
          // padding: "13px 40px",
          border: "none",
          boxShadow: "-21px 16px 38px 0px rgba(193, 45, 217, 0.32)",
        },
        {
          border: "1px solid #C12DD9",
          // padding: "13px 40px",
          color: "#000",
        },
      ],
      partners: [
        {
          id: 1,
          name: "Rosgostrakh",
          img: ROSGOSTRAKH,
        },
        {
          id: 2,
          name: "Betconstruct",
          img: BETCONSTRUCT,
        },
        {
          id: 3,
          name: "Digitain",
          img: DIGITAIN,
        },
      ],
    },
    {
      id: 7,
      title: foundationFriends[0][`title_${lang}` as keyof HeaderTypes],
      headerIcon: FriendsIcon,
      description:
        foundationFriends[0][`description_${lang}` as keyof HeaderTypes],
      mainImg: FRIENDS,
      btn: [
        {
          name: t("btns.become-fund-friend"),
          link: "",
        },
      ],
      btnStyle: [
        {
          background: "#6442EE",
          // padding: "13px 40px",
          border: "none",
          color: "#fff",
          boxShadow: "-21px 16px 38px 0px rgba(100, 66, 238, 0.37)",
        },
      ],
    },
  ];
  const windowSize = useWindowSize();
  return (
    <>
      <div className="separatedPart"></div>
      <Background
        pattern1={
          windowSize.width < 975 ? SIDE_PATTERN_2_MOBILE : SIDE_PATTERN_2
        }
        shoudHaveSidePattern={false}
        style={{ flexDirection: "column", padding: "60px 0" }}
      >
        <Header
          title={ourEcosystem[0][`title_${lang}` as keyof HeaderKeyOf]}
          description={
            ourEcosystem[0][`description_${lang}` as keyof HeaderKeyOf]
          }
          icon={EcosystemIcon}
          style={{ marginBottom: "80px" }}
          className="differedHeaderContainer"
        />
        <div className="ecosystemContainer">
          {data.map((data) => (
            <div className="ecosystem" key={data.id}>
              <div className="ecosystemInner">
                <Header
                  title={data.title}
                  description={data.description}
                  btns={data.btn}
                  icon={data.headerIcon}
                  btnStyles={data.btnStyle}
                  style={{ padding: 0 }}
                  mainImg={data.mainImg}
                  isEcosystem={true}
                  className="homePageHeader"
                />
                <div className="img">
                  <img src={data.mainImg} alt="Icon" />
                </div>
              </div>
              {data.partners && (
                <div className="partners">
                  <div className="innerPartners">
                    {data.partners.map((partner) => (
                      <div className="partner" key={partner.id}>
                        <img src={partner.img} alt={partner.name} />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Background>
    </>
  );
};

export default Ecosystem;
