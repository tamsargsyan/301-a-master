import { ReactNode } from "react";
import "./index.css";

interface ModalProps {
  children: ReactNode;
  setOpenModal: (arg: boolean) => void;
  openModal: boolean;
}

const Modal: React.FC<ModalProps> = ({ children, setOpenModal, openModal }) => {
  return (
    <div
      className={`${openModal && "overlay_opened"} overlay`}
      onClick={() => setOpenModal(false)}
    >
      <div
        className={`${openModal && "opened_modal"} modal`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
