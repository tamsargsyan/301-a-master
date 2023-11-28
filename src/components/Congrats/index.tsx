import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import Button from "../Button";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { congratsModal } from "../../actions/congratsAction";
import PATTERN_1 from "../../assets/patterns/login-small.svg";
import PATTERN_2 from "../../assets/patterns/login-big.svg";

const Conragts = () => {
  const dispatch = useDispatch();
  const { text, open } = useSelector((state: RootState) => state.congrats);

  const handleClose = () => {
    dispatch(congratsModal(false, null));
  };

  return (
    <Modal setOpenModal={handleClose} openModal={open} headerShow={true}>
      <EcosystemModal
        onClose={handleClose}
        header=''
        className='conragts_modal'
        headerChildren={
          <div className='congrats_pattern'>
            <img
              src={PATTERN_1}
              alt='Pattern'
              decoding='async'
              loading='lazy'
            />
            <img
              src={PATTERN_2}
              alt='Pattern'
              decoding='async'
              loading='lazy'
            />
            <img
              src={PATTERN_1}
              alt='Pattern'
              decoding='async'
              loading='lazy'
            />
          </div>
        }>
        <div className='conragts_modal_content'>
          <p className='conragts_text'>{text}</p>
          <Button
            text='ok'
            link={false}
            to={""}
            style={{
              padding: "9px 25px",
              background: "#DD264E",
              color: "#fff",
              width: "150px",
            }}
            onClick={handleClose}
          />
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default Conragts;
