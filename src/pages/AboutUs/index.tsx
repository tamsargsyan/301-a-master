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
import type { CollapseProps } from "antd";
import "./index.css";
import Img from "../../components/Img";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const ontologyItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Каково место человека в мире ?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Что такое онтологическ ий захват ?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Что такое онтологическ ая безопасность ?",
    children: <p>{text}</p>,
  },
];

const questionsItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "Что такое армянское кино?",
    children: <p>{text}</p>,
  },
  {
    key: "2",
    label: "Что такое армянское образование?",
    children: <p>{text}</p>,
  },
  {
    key: "3",
    label: "Что такое армянская культура?",
    children: <p>{text}</p>,
  },
];

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
      <div className='loadingContainer'>
        <Spin size='large' />
      </div>
    );

  const infos = Object.values(data);
  const faq = {
    title_am: "",
    title_ru: "Онтологическая безопасность — F.A.Q.",
    title_en: "",
    short_description_am: "",
    short_description_ru: "<p>Что такое онтология?</p>",
    short_description_en: "",
    description: [
      "<p><span class='mentioned_link'>Онтология</span> — один из крупнейших разделов философии. Онатология изучает основные принципы бытия: его начало, свойства и формы. Слово «онтология» пришло к нам из греческого языка (онтос – сущее, логос – учение) и означает учение о сущем, сущностном, самом важном.</p>",
      "<p><span class='mentioned_link'>Онтология</span> — это система мировидения, мышление о мире. К примеру, когда-то человечество существовало в онтологии Плоской Земли — это накладывало отпечаток на все: науку, технологию, культуру.</p>",
      "<p><span class='mentioned_link'>Онтология</span> — база мышления, система видения мира, на которой основывается все остальное. К тому же онтология — это культурологический клей, он соединяет нацию, культуру, систему ценностей, территориальную айдентику.</p>",
      "<p>К примеру, технологически мы можем приехать в Тибет на электричке, однако — это обесценивает большую часть ритуалов, связанных с походом в Лхасу. В данном случае, легкая достижимость ведет к кризису культуры — культура схлопывается и становится внешней.</p>",
      "<p><span class='mentioned_link'>Потеря онтологии народа — это потеря ключа к его культуре.</span></p>",
    ],
  };
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

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
        <div>
          <Header
            title={faq.title_ru}
            shortDescription={faq.short_description_ru}
            description={""}
            faqDesc={faq.description}
            id='#what-are-we-doing'
          />
          <p className='faq_header'>На какие вопросы отвечает Онтология?</p>
          <Collapse
            items={ontologyItems}
            onChange={onChange}
            className='faq_collapse'
            expandIcon={({ isActive }) => (
              <Img rotate={isActive ? -180 : 0} size="large" />
            )}
          />
        </div>
        <div ref={whatAreWeDoingRef}>
          <Header
            title='Свойства онтологической безопасности'
            description='<p>Возможность понимать, прогнозировать и удерживать на длинном горизонте планирования внутреннюю культуру и этику. К примеру, у бурят лес и духи леса священны. Зная эту онтологию, проектирование государственной институции в области охраны природы значительно упрощается— не нужно останавливать вырубки леса в Бурятии, потому что лес священен и его никто не тронет. Сохраняя культуру, айдентику и внутреннюю онтологию государство получает этическуюцелостность. На контуре внешнего мира, онтология это система, которая позволяет построить коммуникацию и язык с иным на взаимовыгодных условиях, без нарушения айдентики друг друга.</p>'
          />
          <p className='faq_info'>
            Мы не нарушаем твою айдентику, ты ненарушаешь нашу — язык
            коммуникации взаимовыгодный.
          </p>
          <div>
            <Header
              title='Онтологическая безопасность Армении'
              description='<p>Возможность понимать, прогнозировать и удерживать на длинном горизонте планирования внутреннюю культуру и этику. К примеру, у бурят лес и духи леса священны. Зная эту онтологию, проектирование государственной институции в области охраны природы значительно упрощается— не нужно останавливать вырубки леса в Бурятии, потому что лес священен и его никто не тронет. Сохраняя культуру, айдентику и внутреннюю онтологию государство получает этическуюцелостность. На контуре внешнего мира, онтология это система, которая позволяет построить коммуникацию и язык с иным на взаимовыгодных условиях, без нарушения айдентики друг друга.</p>'
            />
            <Header title='Как это обеспечить — три примера' description='' />
          </div>
          <p className='faq_header'>Мы задаем себе вопросы:</p>
          <Collapse
            items={questionsItems}
            onChange={onChange}
            className='faq_collapse'
            expandIcon={({ isActive }) => (
              <Img rotate={isActive ? -180 : 0} size="large" />
            )}
          />
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
