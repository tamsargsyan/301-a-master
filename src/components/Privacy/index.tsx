import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingPrivacyPolicy } from "../../actions/apiActions";
import { RootState } from "../../store/configureStore";
import { Spin } from "antd";
import { HeaderKeyOf } from "../../utils/keyof.type";
import { useLocation, useNavigate } from "react-router";
import cookies from "js-cookie";

const Privacy = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const showPrivacy =
    location.pathname === "/privacy-policy" ||
    location.pathname === "/terms-of-services";

  const endpoint = location.pathname.split("/")[1];
  useEffect(() => {
    //@ts-ignore
    endpoint && dispatch(fetchingPrivacyPolicy(endpoint));
  }, [dispatch, endpoint]);

  const { data, loading } = useSelector(
    (state: RootState) => state.privacyPolicy
  );
  const lang = cookies.get("i18next");
  const jsonData =
    //@ts-ignore
    data[endpoint === "privacy-policy" ? "privacyPolicy" : "termsOfServices"];

  const navigate = useNavigate();

  return (
    <Modal setOpenModal={() => navigate(-1)} openModal={showPrivacy}>
      <EcosystemModal
        onClose={() => navigate(-1)}
        header={jsonData ? jsonData[`title_${lang}`] : ""}
        className='modal_back'>
        <div
          className={`agreementTerms_${loading && "loading"} agreementTerms`}
          style={{
            fontFamily: lang === "am" ? "Montserrat Arm" : "Montserrat",
          }}>
          {loading && data ? (
            <Spin size='large' />
          ) : (
            <p
              dangerouslySetInnerHTML={{
                __html:
                  jsonData &&
                  jsonData[`description_${lang}` as keyof HeaderKeyOf],
              }}
            />
          )}
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default Privacy;
