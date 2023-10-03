import { Fragment, useEffect } from "react";
import Background from "../../components/Background";
import SAGES from "../../assets/info/1.svg";
import EXPERTS from "../../assets/info/10.svg";
import ELIPSE_SAGES from "../../assets/ecosystemDetails/elipse-sages.svg";
import ELIPSE_EXPERTS from "../../assets/ecosystemDetails/elipse-experts.svg";
import Button from "../../components/Button";
import "./index.css";
import EcoSystemDetailsMember from "../../components/EcosystemDetailsMember";
import Footer from "../../components/Footer";
import { scrollToTop } from "../../globalFunctions/scrollToTop";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "../../store/configureStore";
import { fetchingExpertProject } from "../../actions/apiActions";
import { Spin } from "antd";
import PATTERN from "../../assets/patterns/side-1.svg";
import PATTERN_MOBILE from "../../assets/patterns/side-1-mobile.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

const EcoSystemDetails = () => {
  const arr = new Array(3).fill("");

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
  ];

  const dispatch = useDispatch();
  const { ecosystem } = useParams();

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchingExpertProject(`${ecosystem}-project`));
  }, [dispatch, ecosystem]);

  const { data, loading } = useSelector(
    (state: RootState) => state.expertProject
  );
  //@ts-ignore
  const header = data[ecosystem];
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  const ecosystemResult = ecosystemProject.find(e => e.name === ecosystem);
  const windowSize = useWindowSize();

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
              <div className='ecosystemDetails-header'>
                <div className='ecosystemDetails-title'>
                  <img src={ecosystemResult?.icon} alt='Ecosystem' />
                  <h1>{header[`title_${lang}`]}</h1>
                </div>
                <div className='ecosystemDetails-content'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: header[`description_${lang}`],
                    }}
                  />
                </div>
                <Button
                  text='recommented'
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
              {arr.map((_, i) => (
                <Fragment key={i}>
                  <EcoSystemDetailsMember expertProject={ecosystemResult} />
                </Fragment>
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
