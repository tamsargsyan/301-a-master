import Header from "../../components/Header";
import EcosystemIcon from "../../assets/info/5.svg";
import SagesIcon from "../../assets/info/6.svg";
import ClubIcon from "../../assets/info/7.svg";
import AmbassadorIcon from "../../assets/info/8.svg";
import VolunteersIcon from "../../assets/info/9.svg";
import ExpertIcon from "../../assets/info/10.svg";
import PartnersIcon from "../../assets/info/11.svg";
import FriendsIcon from "../../assets/info/12.svg";
import SAGES from "../../assets/info/sages.svg";
import CLUB from "../../assets/info/club.svg";
import AMBASSDOR from "../../assets/info/ambassador.svg";
import VOLUNTEERS from "../../assets/info/volunteers.svg";
import EXPERT from "../../assets/info/expert.svg";
import PARTNERS from "../../assets/info/partners.svg";
import FRIENDS from "../../assets/info/fond.svg";
import ROSGOSTRAKH from "../../assets/info/rostgostrakh.svg";
import BETCONSTRUCT from "../../assets/info/betconstruct.png";
import DIGITAIN from "../../assets/info/digitain.png";
import Background from "../../components/Background";
import SIDE_PATTERN_2 from "../../assets/patterns/side-2.svg";
import SIDE_PATTERN_2_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";

const Ecosystem = () => {
  const data = [
    {
      id: 1,
      headerName: "Мудрецы",
      headerIcon: SagesIcon,
      p: [
        "В рамках проекта на постоянное жительство в Армению переедет 301 мудрец. Это люди больше чем просто профессионалы в своей области, это мудрецы — мыслители и деятели, люди большого ума с нестандартным мышлением и неожиданными взглядами. В Армении будут созданы все условия для реализации их идей, что должно привести к осуществлению ряда прорывных проектов.На сегодняшний день ядро Фонда составляют четыре мудреца, приехавших в Армению из разных стан мира и решивших связать свою жизнь с армянской землей.",
      ],
      mainImg: SAGES,
      btn: ["Узнать больше"],
      btnStyle: [
        {
          padding: "13px 40px",
        },
      ],
    },
    {
      id: 2,
      headerName: "Клуб «301»",
      headerIcon: ClubIcon,
      p: [
        "Фонд «301. Земля мудрости» — некоммерческая организация и осуществляет свою деятельность с помощью взносов участников клуба «301». Размер взноса составляет 301$ в месяц. Участником клуба может стать каждый, кто разделяет нашу миссию и ценности вне зависимости от географических границ.",
      ],
      mainImg: CLUB,
      btn: ["Become one of 301", "Узнать больше"],
      btnStyle: [
        {
          background: "#189387",
          color: "#fff",
          padding: "13px 40px",
          boxShadow: "-21px 16px 38px 0px rgba(24, 147, 135, 0.38)",
          border: "none",
        },
        {
          border: "1px solid #189387",
          padding: "13px 40px",
        },
      ],
    },
    {
      id: 3,
      headerName: "Амбассадоры",
      headerIcon: AmbassadorIcon,
      p: [
        "Амбассадоры фонда являются официальными представителями нашего фонда в различных странах мира. Основная миссия наших амбассадоров — представлять интересы фонда в местах их проживания, доносить миссию и ценности фонда «301», искать и находить поддержку среди тех, кто разделяет наши взгляды.",
      ],
      mainImg: AMBASSDOR,
      btn: ["Стать амбассадором"],
      btnStyle: [
        {
          background: "#EE8842",
          color: "#fff",
          padding: "13px 40px",
          border: "none",
          boxShadow: " -21px 16px 38px 0px rgba(238, 136, 66, 0.42)",
        },
      ],
    },
    {
      id: 4,
      headerName: "Волонтеры",
      headerIcon: VolunteersIcon,
      p: [
        "Важной частью нашего фонда являются волонтеры, которые по своей личной инициативе помогают нам в проектах.  Наши волонтеры — неравнодушные люди, которые верят, что им по силам сделать мир лучше. Волонтером «301» может стать каждый, кто разделяет миссию и ценности фонда.",
      ],
      mainImg: VOLUNTEERS,
      btn: ["Стать волонтером"],
      btnStyle: [
        {
          background: "#C5D92D",
          border: "none",
          color: "#fff",
          padding: "13px 40px",
          boxShadow: "-21px 16px 38px 0px rgba(197, 217, 45, 0.29)",
        },
      ],
    },
    {
      id: 5,
      headerName: "Эксперты",
      headerIcon: ExpertIcon,
      p: [
        "Компетентные специалисты в различных отраслях — важное звено экосистемы фонда «301». Эксперты подключаются к проектам на разных стадиях: помогают проверять гипотезы и реализовывать идеи мудрецов. В наших проектах активное участие принимают эксперты в области науки, культуры, образования, истории, искусства и многих других.",
      ],
      mainImg: EXPERT,
      btn: ["Стать экспертом "],
      btnStyle: [
        {
          background: " #42CFEE",
          border: "none",
          padding: "13px 40px",
          color: "#fff",
          boxShadow: "-21px 16px 38px 0px rgba(66, 207, 238, 0.36)",
        },
      ],
    },
    {
      id: 6,
      headerName: "Партнеры",
      headerIcon: PartnersIcon,
      p: [
        "Нашими партнерами являются различные организации, а также отдельные личности, которые разделяют наши идеи. Наши партнеры поддерживают проекты фонда и оказывают содействие и в их реализации, предоставляя нам различные ресурсы. ",
      ],
      mainImg: PARTNERS,
      btn: ["Стать партнером", "Все партнеры"],
      btnStyle: [
        {
          background: "#C12DD9",
          color: "#fff",
          padding: "13px 40px",
          border: "none",
          boxShadow: "-21px 16px 38px 0px rgba(193, 45, 217, 0.32)",
        },
        {
          border: "1px solid #C12DD9",
          padding: "13px 40px",
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
      headerName: "Друзья фонда",
      headerIcon: FriendsIcon,
      p: [
        "Друзьями фонда являются все, кто помогает: ресурсами, временем, поддержкой, идеями, и остается рядом. ",
        "Чужих не бывает.",
      ],
      mainImg: FRIENDS,
      btn: ["Стать другом фонда"],
      btnStyle: [
        {
          background: "#6442EE",
          padding: "13px 40px",
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
          h1="ЭКОСИСТЕМА Клуб  «301»"
          p={[
            "Мы видим два основный пути развития: с одной стороны — мудрое использовании потенциала, знаний и накопленного культурно-исторического опыта армянского народа; с другой — привлечение нестандартно мыслящих людей, как из Армении, так и из других стран, способных по-новому взглянуть на сложившуюся картину мира.Поэтому мы интегрируем в свою экосистему всех, кто готов вместе с нами строить благополучное будущее Армении.",
          ]}
          icon={EcosystemIcon}
          style={{ marginBottom: "80px" }}
          className="differedHeaderContainer"
        />
        <div className="ecosystemContainer">
          {data.map((data) => (
            <div className="ecosystem" key={data.id}>
              <div className="ecosystemInner">
                <Header
                  h1={data.headerName}
                  p={data.p}
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
