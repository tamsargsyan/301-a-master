import { ReactNode, useEffect, useState } from "react";
import "./index.css";
import { useWindowSize } from "../../hooks/useWindowSize";
import CLOSE from "../../assets/close.svg";

interface ModalProps {
  children: ReactNode;
  setOpenModal: (arg: boolean) => void;
  openModal: boolean;
  className?: string;
  headerShow?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  children,
  setOpenModal,
  openModal,
  className,
  headerShow,
}) => {
  const windowSize = useWindowSize();
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbarElement = document.querySelector(".navbarContainer");
    if (navbarElement) {
      setNavbarHeight(navbarElement.clientHeight);
    }
  }, []);

  return (
    <div
      className={`${openModal && "overlay_opened"} ${className} overlay`}
      onClick={() => setOpenModal(false)}
      style={{
        top:
          windowSize.width < 800 && !headerShow ? `${navbarHeight}px` : "0px",
      }}>
      <div
        className={`${openModal && "opened_modal"} modal`}
        onClick={e => e.stopPropagation()}>
        {windowSize.width <= 600 && headerShow && (
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
