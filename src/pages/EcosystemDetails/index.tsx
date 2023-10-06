import { useEffect } from "react";
import Background from "../../components/Background";
import SAGES from "../../assets/info/1.svg";
import EXPERTS from "../../assets/info/10.svg";
import AMBASSADOR from "../../assets/signup-account-types/ambassador.svg";
import FRIENDS from "../../assets/signup-account-types/friends.svg";
import PARTNERS from "../../assets/signup-account-types/partners.svg";
import ELIPSE_SAGES from "../../assets/ecosystemDetails/elipse-sages.svg";
import ELIPSE_EXPERTS from "../../assets/ecosystemDetails/elipse-experts.svg";
import ELIPSE_AMBASSADORS from "../../assets/ecosystemDetails/elipse-ambassadors.svg";
import ELIPSE_FRIENDS from "../../assets/ecosystemDetails/elipse-friends.svg";
import Button from "../../components/Button";
import "./index.css";
import EcoSystemDetailsMember from "../../components/EcosystemDetailsMember";
import Footer from "../../components/Footer";
import { scrollToTop } from "../../globalFunctions/scrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../../store/configureStore";
import {
  fetchingExpertProject,
  fetchingPartners,
} from "../../actions/apiActions";
import { Spin } from "antd";
import PATTERN from "../../assets/patterns/side-1.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-1-mobile.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { useTranslation } from "react-i18next";

const EcoSystemDetails = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  const ecosystemProject = [
    {
      name: "sages",
      color: "rgb(221, 38, 78)",
      colorWeak: "#DD264E99",
      icon: SAGES,
      elipse: ELIPSE_SAGES,
    },
    {
      name: "experts",
      color: "#42CFEE",
      colorWeak: "#42CFEE99",
      icon: EXPERTS,
      elipse: ELIPSE_EXPERTS,
    },
    {
      name: "ambassadors",
      color: "",
      colorWeak: "",
      icon: AMBASSADOR,
      elipse: ELIPSE_AMBASSADORS,
    },
    {
      name: "friends",
      color: "",
      colorWeak: "",
      icon: FRIENDS,
      elipse: ELIPSE_FRIENDS,
    },
    {
      name: "partners",
      color: "",
      colorWeak: "",
      icon: PARTNERS,
      elipse: "",
    },
  ];

  const dispatch = useDispatch();
  const { ecosystem } = useParams();

  useEffect(() => {
    if (ecosystem === "partners") {
      //@ts-ignore
      dispatch(fetchingExpertProject(`all-${ecosystem}`));
      //@ts-ignore
      dispatch(fetchingPartners("partners"));
    } else {
      //@ts-ignore
      dispatch(fetchingExpertProject(`${ecosystem}-project`));
    }
  }, [dispatch, ecosystem]);

  const { data, partners, loading } = useSelector(
    (state: RootState) => state.expertProject
  );
  // console.log(data, "data");
  // console.log(partners, "partners");
  const header =
    //@ts-ignore
    ecosystem === "partners" ? partners?.partnersDescription : data[ecosystem];
  const project =
    ecosystem === "partners" ? data.partners : data[`${ecosystem}Project`];
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  const ecosystemResult = ecosystemProject.find(e => e.name === ecosystem);
  const windowSize = useWindowSize();
  const { t } = useTranslation();
  // console.log(project);
  if (loading)
    return (
      <div className='loadingContainer'>
        <Spin size='large' />
      </div>
    );

  return (
    <>
      {header && (
        <>
          <Background
            style={{ flexDirection: "column" }}
            pattern1={windowSize.width < 975 ? PATTERN_MOBILE : PATTERN}>
            <div className='ecosystemDetails'>
              <div className='ecosystemDetails_'>
                <div className='ecosystemDetails-title'>
                  <img src={ecosystemResult?.icon} alt='Ecosystem' />
                </div>
                <div className='ecosystemDetails-header'>
                  <h1>{header[`title_${lang}`]}</h1>
                  <div className='ecosystemDetails-content'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: header[`description_${lang}`],
                      }}
                    />
                  </div>
                  <Button
                    text={t("btns.recommended")}
                    link={false}
                    to={""}
                    style={{
                      background: ecosystemResult?.color,
                      color: "#fff",
                      marginLeft: "auto",
                      border: "none",
                    }}
                    className='recommented'
                  />
                </div>
              </div>
              {project.map((p: any) => (
                <EcoSystemDetailsMember
                  expertProject={ecosystemResult}
                  project={p}
                />
              ))}
            </div>
          </Background>
          <Footer />
        </>
      )}
    </>
  );
};

export default EcoSystemDetails;
