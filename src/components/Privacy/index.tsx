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
  const endpoint =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  console.log(endpoint, "endpoinnt-----");

  useEffect(() => {
    dispatch(
      //@ts-ignore
      fetchingPrivacyPolicy(endpoint)
    );
  }, [dispatch]);

  const { data, loading } = useSelector(
    (state: RootState) => state.privacyPolicy
  );
  const lang = cookies.get("i18next");

  const navigate = useNavigate();

  return (
    <Modal setOpenModal={() => navigate(-1)} openModal={true}>
      <EcosystemModal
        onClose={() => navigate(-1)}
        header={
          data
            ? data.privacy && data.privacy[`title_${lang}` as keyof HeaderKeyOf]
            : ""
        }
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
                  data &&
                  data.privacy &&
                  data.privacy[`description_${lang}` as keyof HeaderKeyOf],
              }}
            />
          )}
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default Privacy;
