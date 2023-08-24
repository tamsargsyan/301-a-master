import Main from "../Main";
import Background from "../../components/Background";
import Header from "../../components/Header";
import About from "../Hypotheses";
import Projects from "../Projects";
import Ecosystem from "../Ecosystem";
import News from "../News";
import Contact from "../Contact";
import Footer from "../Footer";
import { useWindowSize } from "../../hooks/useWindowSize";
import SIDE_PATTERN_2 from "../../assets/patterns/side-2.svg";
import SIDE_PATTERN_2_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import SMALL_PATTERN_2 from "../../assets/patterns/small-2.svg";
import BIG_PATTERN_2 from "../../assets/patterns/big-2.svg";
import BIG_PATTERN_3 from "../../assets/patterns/big-3.svg";
import ICON_1 from "../../assets/info/1.svg";
import ICON_2 from "../../assets/info/2.svg";
import ICON_3 from "../../assets/info/3.svg";
import { Fragment, useEffect } from "react";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchingHome } from "../../actions/apiActions";
import { RootState } from "../../store/configureStore";
import { useParams } from "react-router";

const Home = () => {
  const windowSize = useWindowSize();
  // const [data, setData] = useState<any>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchingHome("home"));
  }, [dispatch]);

  const { lang } = useParams(); // Get the current language from URL

  const { loading, data } = useSelector((state: RootState) => state.homeData);

  if (loading)
    return (
      <div className="loadingContainer">
        <Spin size="large" />
      </div>
    );

  const {
    OurProjects,
    ambassadors,
    club301,
    experts,
    foundationFriends,
    dataHypotheses,
    news,
    ourEcosystem,
    ourMission,
    partners,
    projects,
    sages,
    volunteers,
    whyImportant,
    hypothesesForTheFuture,
    landOfWisdom,
    followUs,
  } = data;

  const removeHtmlTags = (text: string) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };
  const ourMissionShortDesc =
    ourMission &&
    removeHtmlTags(ourMission[0][`short_description_${lang || "ru"}`])
  console.log(ourMissionShortDesc)
  const sections = [
    {
      id: 1,
      title: ourMission && ourMission[0][`title_${lang || "ru"}`],
      shortDescription:
        ourMission && ourMission[0][`short_description_${lang || "ru"}`],
      description: ourMission && ourMission[0][`description_${lang || "ru"}`],
      btn: ["Узнать больше"],
      icon: ICON_1,
      pattern1: undefined,
      pattern2: SMALL_PATTERN_2,
      pattern3: BIG_PATTERN_2,
      shoudHaveSidePattern: false,
      innerClassName: undefined,
    },
    {
      id: 2,
      title: whyImportant && whyImportant[0][`title_${lang || "ru"}`],
      shortDescription: "",
      description:
        whyImportant && whyImportant[0][`description_${lang || "ru"}`],
      btn: undefined,
      icon: ICON_2,
      pattern1: windowSize.width < 975 ? SIDE_PATTERN_2_MOBILE : SIDE_PATTERN_2,
      pattern2: SMALL_PATTERN_2,
      pattern3: BIG_PATTERN_3,
      shoudHaveSidePattern: false,
      innerClassName: "importantInner",
    },
    {
      id: 3,
      title:
        hypothesesForTheFuture &&
        hypothesesForTheFuture[0][`title_${lang || "ru"}`],
      shortDescription: "",
      description:
        hypothesesForTheFuture &&
        hypothesesForTheFuture[0][`description_${lang || "ru"}`],
      btn: undefined,
      icon: ICON_3,
      pattern1: windowSize.width < 975 ? SIDE_PATTERN_2_MOBILE : SIDE_PATTERN_2,
      pattern2: undefined,
      pattern3: undefined,
      shoudHaveSidePattern: false,
      innerClassName: "hypothesesInner",
    },
  ];

  return (
    <>
      {data && landOfWisdom && (
        <>
          <Main
            followUs={followUs}
            landOfWisdom={landOfWisdom}
            lang={lang || "ru"}
          />
          {sections.map((section) => (
            <Fragment key={section.id}>
              <div className="separatedPart"></div>
              <Background
                pattern1={section.pattern1}
                pattern2={section.pattern2}
                pattern3={section.pattern3}
                shoudHaveSidePattern={section.shoudHaveSidePattern}
                style={{ padding: "60px 0" }}
              >
                <Header
                  title={section.title}
                  shortDescription={section.shortDescription}
                  description={section.description}
                  btns={section.btn}
                  icon={section.icon}
                  innerClassName={section.innerClassName}
                  className="differedHeaderContainer homePageHeader"
                  ourMissionDesc={section.id === 1 && ourMissionShortDesc}
                />
              </Background>
            </Fragment>
          ))}
          <About dataHypotheses={dataHypotheses} lang={lang || "ru"} />
          <Projects
            OurProjects={OurProjects}
            lang={lang || "ru"}
            projects={projects}
          />
          <Ecosystem
            ourEcosystem={ourEcosystem}
            lang={lang || "ru"}
            sages={sages}
            club301={club301}
            ambassadors={ambassadors}
            volunteers={volunteers}
            experts={experts}
            partners={partners}
            foundationFriends={foundationFriends}
          />
          <News news={news} lang={lang || "ru"} />
          <Contact />
          <Footer followUs={followUs} />
        </>
      )}
    </>
  );
};

export default Home;
