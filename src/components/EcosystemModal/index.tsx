import { ReactNode } from "react";
import CLOSE from "../../assets/sign-up-close.svg";
import ARROW from "../../assets/arrow.svg";
import "./index.css";

interface EcosystemModalProps {
  onClose: () => void;
  children: ReactNode;
  header: string;
  className?: string;
}

const EcosystemModal: React.FC<EcosystemModalProps> = ({
  onClose,
  children,
  header,
  className,
}) => {
  return (
    <div className={`${className} signUp_bg`}>
      <div className='signUp_content'>
        <div className='signUp_content_header'>
          <button className='close' onClick={onClose}>
            {className === "modal_back" ? (
              <>
                Back
                <div>
                  <img src={ARROW} alt='Arrow' />
                </div>
              </>
            ) : (
              <img src={CLOSE} alt='Close' />
            )}
          </button>
          <div className='signUp_header'>
            <p>{header}</p>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default EcosystemModal;
