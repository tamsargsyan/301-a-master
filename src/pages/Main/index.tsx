import Background from "../../components/Background";
import Header from "../../components/Header";
import SIDE_PATTERN from "../../assets/patterns/side-1.svg";
import SIDE_PATTERN_MOBILE from "../../assets/patterns/side-1-mobile.svg";
import SMALL_PATTERN from "../../assets/patterns/small-1.svg";
import BIG_PATTERN from "../../assets/patterns/big-1.svg";
import LOGO from "../../assets/301.png";
import LOGO_MOBILE from "../../assets/301-mobile.png";
import "./index.css";
import FollowUs from "../../components/FollowUs";
import { useWindowSize } from "../../hooks/useWindowSize";
import BG from "../../assets/info/main-page-bg.svg";
import BG_MOBILE from "../../assets/info/main-page-bg-mobile.svg";

interface MainProps {
  landOfWisdom: any;
  followUs: any;
  lang: string;
}

const Main: React.FC<MainProps> = ({ landOfWisdom, followUs, lang }) => {
  const windowSize = useWindowSize();
  console.log(followUs);
  return (
    <Background
      pattern1={windowSize.width < 975 ? SIDE_PATTERN_MOBILE : SIDE_PATTERN}
      pattern2={SMALL_PATTERN}
      pattern3={BIG_PATTERN}
      bigPatternStyle={{
        display: windowSize.width < 975 ? "none" : "block",
      }}
      shoudHaveSidePattern={true}
      style={{ flexDirection: windowSize.width < 975 ? "column" : "row" }}
    >
      {windowSize.width < 975 && (
        <div className="bgLogo">
          <img src={BIG_PATTERN} className="mainBigPattern" alt="Pattern" />
          <img src={LOGO_MOBILE} alt="301" className="logoMobile" />
        </div>
      )}
      <div className="bg">
        <img src={windowSize.width < 975 ? BG_MOBILE : BG} alt="Background" />
      </div>
      <Header
        title={landOfWisdom[`title_${lang}`]}
        icon={""}
        description={landOfWisdom[`description_${lang}`]}
        btns={["Стань одним из 301", "Весь проект"]}
        btnStyles={[
          {
            background: "#DD264E",
            color: "#fff",
            border: "none",
          },
          {
            border: "2px solid #151C26",
            background: "rgba(255, 255, 255, 0.12)",
          },
        ]}
        style={{ padding: 0, width: "40vw" }}
        className="mainPageHeader homePageHeader"
      />
      {windowSize.width > 975 && (
        <div className="bgLogo">
          <img src={LOGO} alt="301" />
        </div>
      )}
      <FollowUs className="mainFollowUs" links={followUs} />
    </Background>
  );
};

export default Main;
