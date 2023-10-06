import EcosystemModal from "../EcosystemModal";
import Modal from "../Modal";
import SingleProjectBox from "../SingleProjectBox";
import "./index.css";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { openDonateModal } from "../../actions/donateAction";
import { fetchingProjectDetails } from "../../actions/apiActions";
import { Spin } from "antd";
import { storageBase } from "../../utils/storage";
import { removeHtmlTags } from "../../globalFunctions/removeHtmlTags";

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
  const dispatch = useDispatch();

  const handleClose = () => {
    // setDonation(true);
    dispatch(openDonateModal(true));
    setDonateProjects(false);
  };

  const handleSingleProject = (id: number) => {
    setDonateSingleProject(true);
    setDonateProjects(false);
    //@ts-ignore
    dispatch(fetchingProjectDetails(`project-details/${id}`));
  };
  const [p, setP] = useState(null);

  useEffect(() => {
    // donateProjects && dispatch(fetchingProjects("project"));
    donateProjects &&
      fetch("https://301.machtech.site/api/get-all-project")
        .then(response => response.json())
        .then(data => setP(data))
        .catch(error => console.error(error));
  }, [donateProjects]);

  return (
    <Modal setOpenModal={handleClose} openModal={donateProjects}>
      <EcosystemModal onClose={handleClose} header='donate'>
        <div className='donationProjects_wrapper'>
          <div className='donationProjects_title'>Select Project</div>
          {false ? (
            <div className='donationProjects_spinner'>
              <Spin size='large' />
            </div>
          ) : (
            <div className='donationProjects'>
              {p &&
                //@ts-ignore
                p.data?.map((p: any, i: number) => (
                  <Fragment key={i}>
                    <SingleProjectBox
                      title={p?.project?.project_name_am}
                      description={removeHtmlTags(
                        p?.project?.problem_description_en
                      )}
                      flag={p?.map_count}
                      author={`${p?.sages?.name} ${p?.sages?.last_name}`}
                      authorImg={`${storageBase}/${p?.sages?.image}`}
                      budget={p?.project?.budget_price}
                      collected={p?.collectedPrice}
                      projectImg={`${storageBase}/${p?.project?.image}`}
                      className='donation_project'
                      onClick={() => handleSingleProject(p?.project?.id)}
                    />
                  </Fragment>
                ))}
            </div>
          )}
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default DonationProjectsModal;
