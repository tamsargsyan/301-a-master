import { ReactNode } from "react";
import CLOSE from "../../assets/sign-up-close.svg";
import ARROW from "../../assets/arrow.svg";
import "./index.css";
import { useTranslation } from "react-i18next";
import Footer from "../Footer";
import { useWindowSize } from "../../hooks/useWindowSize";

interface EcosystemModalProps {
  onClose: () => void;
  children: ReactNode;
  header: string;
  className?: string;
  closeIcon?: string;
  headerChildren?: ReactNode;
}

const EcosystemModal: React.FC<EcosystemModalProps> = ({
  onClose,
  children,
  header,
  className,
  closeIcon,
  headerChildren,
}) => {
  const { t } = useTranslation();
  const windowSize = useWindowSize();

  return (
    <div className={`${className} signUp_bg`}>
      <div className='signUp_content'>
        <div className='signUp_content_header'>
          <button className='close' onClick={onClose}>
            {className === "modal_back" ? (
              <>
                {t("btns.back")}
                <div>
                  <img
                    src={ARROW}
                    alt='Arrow'
                    decoding='async'
                    loading='lazy'
                  />
                </div>
              </>
            ) : (
              <img
                src={closeIcon ? closeIcon : CLOSE}
                alt='Close'
                decoding='async'
                loading='lazy'
              />
            )}
          </button>
          <div className='signUp_header'>
            <p>{header}</p>
          </div>
          {headerChildren}
        </div>
        {children}
      </div>
      {windowSize.width < 800 && <Footer />}
    </div>
  );
};

export default EcosystemModal;
