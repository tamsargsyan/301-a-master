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

  useEffect(() => {
    //@ts-ignore
    dispatch(fetchingPrivacyPolicy("privacy-policy"));
  }, [dispatch, privacy.modal]);

  const { data, loading } = useSelector(
    (state: RootState) => state.privacyPolicy
  );

  const lang = useSelector((state: RootState) => state.languageDitactor.lang);

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
          {loading ? (
            <Spin size='large' />
          ) : (
            <p
              dangerouslySetInnerHTML={{
                __html:
                  data.privacyPolicy &&
                  data.privacyPolicy[
                    `description_${lang}` as keyof HeaderKeyOf
                  ],
              }}
            />
          )}
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default Privacy;
