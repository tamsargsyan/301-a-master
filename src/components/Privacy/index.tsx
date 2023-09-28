import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingPrivacyPolicy } from "../../actions/apiActions";
import { RootState } from "../../store/configureStore";
import { Spin } from "antd";
import { HeaderKeyOf } from "../../utils/keyof.type";

interface PrivacyProps {
  privacy: { modal: boolean; privacy: string };
  setPrivacy: (arg: { modal: boolean; privacy: string }) => void;
  setAccountType: (arg: { open: boolean; id: number; name: string }) => void;
  handleClose: () => void;
}

const Privacy: React.FC<PrivacyProps> = ({ privacy, handleClose }) => {
  const dispatch = useDispatch();
  const endpoint = privacy?.privacy?.toLowerCase().split(" ").join("-");

  const toCamelCase = (input: string) => {
    return input
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
  };

  useEffect(() => {
    //@ts-ignore
    endpoint && dispatch(fetchingPrivacyPolicy(endpoint));
  }, [dispatch, privacy.modal, endpoint]);

  const { data, loading } = useSelector(
    (state: RootState) => state.privacyPolicy
  );
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  //@ts-ignore
  const jsonData = data[toCamelCase(privacy.privacy)];

  return (
    <Modal setOpenModal={handleClose} openModal={privacy.modal}>
      <EcosystemModal
        onClose={handleClose}
        header={privacy.privacy}
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
