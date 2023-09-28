import EcosystemModal from "../EcosystemModal";
import Modal from "../Modal";
import SingleProjectBox from "../SingleProjectBox";
import AUTHOR_1 from "../../assets/projectAuthor/1.svg";
import PROJECT_1 from "../../assets/projectAuthor/project-1.png";
import "./index.css";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { openDonateModal } from "../../actions/donateAction";

interface DonationProjectsModalProps {
  donateProjects: boolean;
  setDonateProjects: (arg: boolean) => void;
  // setDonation: (arg: boolean) => void;
  setDonateSingleProject: (arg: boolean) => void;
}

const DonationProjectsModal: React.FC<DonationProjectsModalProps> = ({
  donateProjects,
  setDonateProjects,
  // setDonation,
  setDonateSingleProject,
}) => {
  const arr = new Array(6).fill("");
  const dispatch = useDispatch();

  const handleClose = () => {
    // setDonation(true);
    dispatch(openDonateModal(true));
    setDonateProjects(false);
  };

  const handleSingleProject = () => {
    setDonateSingleProject(true);
    setDonateProjects(false);
  };

  return (
    <Modal setOpenModal={handleClose} openModal={donateProjects}>
      <EcosystemModal onClose={handleClose} header='donate'>
        <div className='donationProjects_wrapper'>
          <div className='donationProjects_title'>Select Project</div>
          <div className='donationProjects'>
            {arr.map((_, i) => (
              <Fragment key={i}>
                <SingleProjectBox
                  title='301 Land of Wisdom'
                  description='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
                  flag={10}
                  author='Peter Nemoy'
                  authorImg={AUTHOR_1}
                  sum='20.000'
                  percent={80}
                  projectImg={PROJECT_1}
                  className='donation_project'
                  onClick={handleSingleProject}
                />
              </Fragment>
            ))}
          </div>
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default DonationProjectsModal;
