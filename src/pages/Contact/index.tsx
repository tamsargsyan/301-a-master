import Footer from "../../components/Footer";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import { Helmet } from "react-helmet";
import SIDE_PATTERN from "../../assets/patterns/side-about-us.svg";
import SIDE_PATTERN_MOBILE from "../../assets/patterns/side-1-mobile.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import Background from "../../components/Background";
import Map from "../../components/Map";
import LOCATION from "../../assets/location-black.svg";
import PHONE from "../../assets/phone-black.svg";
import EMAIL from "../../assets/email-black.svg";
import FACEBOOK from "../../assets/fb.svg";
import INSTAGRAM from "../../assets/ig.svg";
import LINKEDIN from "../../assets/li.svg";
import TELEGRAM from "../../assets/tg.svg";
import WHATSAPP from "../../assets/wa.svg";
import "./index.css";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const windowSize = useWindowSize();
  const { t } = useTranslation();

  return (
    <div className='media_container'>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Background
        pattern1={windowSize.width < 800 ? SIDE_PATTERN_MOBILE : SIDE_PATTERN}
        style={{
          flexDirection: "column",
          gap: "40px",
          padding: 0,
          paddingBottom: "40px",
        }}>
        <div className='media_header_wrapper'>
          <Header
            title={t("contact.title")}
            description="<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>"
          />
        </div>
        <Contact contactPage={true} />
        <div className='contactPage_address_wrapper'>
          <div className='contactPage_address_1'>
            <p className='contactPage_address_title'>{t("contact.title")}</p>
            <div className='contactPage_adresses'>
              <div className='contactPage_address'>
                <img src={LOCATION} alt='Location' />
                {t("footer.address")}
              </div>
              <div className='contactPage_address'>
                <img src={PHONE} alt='Phone' />
                +374 567890
              </div>
              <div className='contactPage_address'>
                <img src={EMAIL} alt='Location' />
                301@loftpineapple.com
              </div>
            </div>
            <p className='contactPage_address_title'>{t("follow-us")}</p>
            <div className='contactPage_medias'>
              <a href='facebook.com'>
                <img src={FACEBOOK} alt='Facebook' />
              </a>
              <a href='instagram.com'>
                <img src={INSTAGRAM} alt='Instagram' />
              </a>
              <a href='linkedin.com'>
                <img src={LINKEDIN} alt='Linked In' />
              </a>
              <a href='telegram.com'>
                <img src={TELEGRAM} alt='Telegram' />
              </a>
              <a href='whatsapp.com'>
                <img src={WHATSAPP} alt='Whats App' />
              </a>
            </div>
          </div>
          <div className='contactPage_address_2'>
            <Map />
          </div>
        </div>
      </Background>
      <Footer />
    </div>
  );
};

export default ContactPage;
