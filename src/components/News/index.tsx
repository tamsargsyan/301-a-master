import Background from "../Background";
import Header from "../Header";
import HeaderIcon from "../../assets/info/news.svg";
import SIDE_PATTERN_2 from "../../assets/patterns/side-2.svg";
import SIDE_PATTERN_2_MOBILE from "../../assets/patterns/side-2-mobile.svg";
import NEWS_1 from "../../assets/news1.png";
import ARROW from "../../assets/arrow.svg";
import "./index.css";
import Button from "../Button";
import { useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { HeaderKeyOf } from "../../utils/keyof.type";

interface newsTypes {
  id: number;
  title_am: string;
  title_en: string;
  title_ru: string;
  description_am: string;
  description_ru: string;
  description_en: string;
  image: string;
  created_at: string;
}

interface NewsProps {
  lang: string;
}

const News: React.FC<NewsProps> = ({ lang }) => {
  const [activeNews, setActiveNews] = useState(2);
  const handleBack = () => {
    activeNews > 1 && setActiveNews((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    activeNews < 3 && setActiveNews((prevIndex) => prevIndex + 1);
  };

  const windowSize = useWindowSize();
  const { t } = useTranslation();
  const { news } = useSelector((state: RootState) => state.homeData.data);

  return (
    <>
      <div className='separatedPart'></div>
      <Background
        pattern1={
          windowSize.width < 975 ? SIDE_PATTERN_2_MOBILE : SIDE_PATTERN_2
        }
        pattern2LeftStyle={{
          width: "190px",
          height: "190px",
          top: "350px",
        }}
        pattern2RightStyle={{
          display: "none",
        }}
        style={{ flexDirection: "column", padding: "0" }}>
        <Header
          title={t("news-301")}
          description=''
          icon={HeaderIcon}
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            width: "100%",
            paddingLeft: "300px",
            alignItems: "center",
          }}
        />
        <button className='leftBtn newsBtn' onClick={handleBack}>
          <img src={ARROW} alt='Arrow' />
        </button>
        <button className='rightBtn newsBtn' onClick={handleNext}>
          <img src={ARROW} alt='Arrow' />
        </button>
        <div className='newsContainer'>
          {news.map((item: any) => {
            const dynamicTitle = item[`title_${lang}` as keyof HeaderKeyOf];
            const altText =
              typeof dynamicTitle === "string" ? dynamicTitle : "";
            return (
              <div
                className={`${activeNews === item.id && "activeNews"} ${
                  activeNews === 1 && item.id === 2 && "activeNews1"
                } ${activeNews === 3 && item.id === 2 && "activeNews2"} news`}
                key={item.id}>
                <div className='newsImg'>
                  <img src={NEWS_1} alt={altText} />
                </div>
                <div className='newsContent'>
                  <h1>{dynamicTitle}</h1>
                  <div
                    dangerouslySetInnerHTML={{
                      //@ts-ignore
                      __html: item[`description_${lang}` as keyof newsTypes],
                    }}
                  />
                  <p>{item.created_at.split("T")[0] as keyof newsTypes}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className='btns newsBtns'
          style={{ margin: 0, padding: "0 20px", marginBottom: "40px" }}>
          <Button
            text={t("btns.all-news")}
            style={{
              color: "#DD264E",
              boxShadow: "-21px 16px 38px 0px rgba(191, 9, 48, 0.21)",
              margin: windowSize.width < 975 ? 0 : "50px 0",
              // padding: "15px 30px",
            }}
            link={true}
            to={""}
            className='homePage_btn'
          />
        </div>
      </Background>
    </>
  );
};

export default News;
