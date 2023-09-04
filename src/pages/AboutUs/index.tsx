import Background from "../../components/Background";
import SIDE_PATTERN from "../../assets/patterns/side-about-us.svg";
import Header from "../../components/Header";
import { Fragment, useEffect, useRef } from "react";
import Footer from "../../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import Contact from "../../components/Contact";
import PATTERN_1 from "../../assets/patterns/about-us/big-pattern-1.svg";
import PATTERN_2 from "../../assets/patterns/about-us/big-pattern-2.svg";
import PATTERN_3 from "../../assets/patterns/about-us/big-pattern-3.svg";
import { fetchingAboutUs } from "../../actions/apiActions";
import { Spin } from "antd";
import "./index.css";

const AboutUs = () => {
  const data1 = [
    "Соглашение условий *",
    "КОДЕКС ЭТИКИ КЛУБА 301*",
    "Форма поддержки",
    "Terms of Services and Privacy Policy",
  ];
  const dispatch = useDispatch();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchingAboutUs("about-us"));
  }, [dispatch]);

  const { data, loading } = useSelector((state: RootState) => state.aboutUs);
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  const whatAreWeDoingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.location.hash === "#what-are-we-doing" &&
      whatAreWeDoingRef.current
    ) {
      whatAreWeDoingRef.current.scrollIntoView();
    }
  }, [whatAreWeDoingRef]);

  if (loading)
    return (
      <div className="loadingContainer">
        <Spin size="large" />
      </div>
    );

  const infos = Object.values(data);

  return (
    <>
      <Background
        pattern1={SIDE_PATTERN}
        style={{ flexDirection: "column", gap: "90px" }}
      >
        <div className="aboutUs-bigPattern-1">
          <img src={PATTERN_1} alt="Pattern" />
        </div>
        <div className="aboutUs-bigPattern-2">
          <img src={PATTERN_2} alt="Pattern" />
        </div>
        <div className="aboutUs-bigPattern-3">
          <img src={PATTERN_3} alt="Pattern" />
        </div>
        {infos.map((info: any, i: number) => (
          <div
            key={i}
            ref={
              info.title_en === "WHAT ARE WE DOING ?" ? whatAreWeDoingRef : null
            }
          >
            <Header
              title={info[`title_${lang}`]}
              shortDescription={info[`short_description_${lang}`]}
              description={info[`description_${lang}`]}
              ourMissionDesc={info[`short_description_${lang}`]}
              id={
                info.title_en === "WHAT ARE WE DOING ?"
                  ? "#what-are-we-doing"
                  : ""
              }
            />
          </div>
        ))}
        <div className="aboutUs_dashedLine" />
        <div className="inner aboutUs_privacy">
          {data1.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
      </Background>
      <Contact />
      <Footer />
    </>
  );
};

export default AboutUs;
