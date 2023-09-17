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
import { Spin, Collapse } from "antd";
import "./index.css";
import Img from "../../components/Img";
import { removeHtmlTags } from "../../globalFunctions/removeHtmlTags";

const { Panel } = Collapse;

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
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && window.location.hash === "#faq" && faqRef.current) {
      faqRef.current.scrollIntoView();
    }
  }, [faqRef, data]);

  if (loading)
    return (
      <div className='loadingContainer'>
        <Spin size='large' />
      </div>
    );

  const infos = Object.values(data);
  const faq = infos[5];

  return (
    <>
      <Background
        pattern1={SIDE_PATTERN}
        style={{ flexDirection: "column", gap: "90px" }}>
        <div className='aboutUs-bigPattern-1'>
          <img src={PATTERN_1} alt='Pattern' />
        </div>
        <div className='aboutUs-bigPattern-2'>
          <img src={PATTERN_2} alt='Pattern' />
        </div>
        <div className='aboutUs-bigPattern-3'>
          <img src={PATTERN_3} alt='Pattern' />
        </div>
        {infos.map((info: any, i: number) => {
          return (
            i < 5 && (
              <div key={i}>
                <Header
                  title={info[`title_${lang}`]}
                  shortDescription={info[`short_description_${lang}`]}
                  description={info[`description_${lang}`]}
                  ourMissionDesc={info[`short_description_${lang}`]}
                />
              </div>
            )
          );
        })}
        <div ref={faqRef} className='faq_qesutions'>
          {faq &&
            //@ts-ignore
            faq.map((f, i) => (
              <div className='faq_question' key={i}>
                <h1>{f["title_ru"]}</h1>
                {f.id > 1 ? (
                  <Collapse
                    accordion
                    bordered={false}
                    className='faq_collapse'
                    expandIcon={({ isActive }) => (
                      <Img rotate={isActive ? -180 : 0} size='large' />
                    )}>
                    {
                      //@ts-ignore
                      f.question_answer.map((q, i) => (
                        <Panel
                          header={removeHtmlTags(q[`question_ru`])}
                          key={i}
                          className='faq_q'>
                          <p className='faq_a'>
                            {removeHtmlTags(q[`answer_ru`])}
                          </p>
                        </Panel>
                      ))
                    }
                  </Collapse>
                ) : (
                  //@ts-ignore
                  f.question_answer.map((q, i) => (
                    <Fragment key={i}>
                      <p className='faq_q'>
                        {removeHtmlTags(q[`question_ru`])}
                      </p>
                      <span
                        className='faq_a'
                        dangerouslySetInnerHTML={{
                          __html: q[`answer_ru`],
                        }}
                      />
                    </Fragment>
                  ))
                )}
              </div>
            ))}
        </div>
        <div className='aboutUs_dashedLine' />
        <div className='inner aboutUs_privacy'>
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
