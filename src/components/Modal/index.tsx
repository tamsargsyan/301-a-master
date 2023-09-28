import { ReactNode } from "react";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import CLOSE from "../../assets/close.svg";

interface ModalProps {
  children: ReactNode;
  setOpenModal: (arg: boolean) => void;
  openModal: boolean;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({
  children,
  setOpenModal,
  openModal,
  className,
}) => {
  const windowSize = useWindowSize();

  return (
    <div
      className={`${openModal && "overlay_opened"} ${className} overlay`}
      onClick={() => setOpenModal(false)}>
      <div
        className={`${openModal && "opened_modal"} modal`}
        onClick={e => e.stopPropagation()}>
        {windowSize.width <= 600 && (
          <div className='modal_close_mobile'>
            <button onClick={() => setOpenModal(false)}>
              <img src={CLOSE} alt='Close' />
            </button>
            <span>Menu</span>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal;
