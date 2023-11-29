import EcosystemModal from "../EcosystemModal";
import Modal from "../Modal";
import SingleProjectBox from "../SingleProjectBox";
import "./index.css";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDonateSingleProject } from "../../actions/donateAction";
import { fetchingProjectDetails } from "../../actions/apiActions";
import { Spin } from "antd";
import { storageBase } from "../../utils/storage";
import { useTranslation } from "react-i18next";
import { RootState } from "../../store/configureStore";
import { useLocation, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import cookies from "js-cookie";

interface DonationProjectsModalProps {
  donateProjects: boolean;
  setDonateProjects: (arg: boolean) => void;
}

const DonationProjectsModal: React.FC<DonationProjectsModalProps> = ({
  setDonateProjects,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    // setDonation(true);
    // dispatch(openDonateModal(true));
    // setDonateProjects(false);
    navigate(-1);
  };

  const handleSingleProject = (slug: string) => {
    // dispatch(openDonateSingleProject(true, "donation"));
    // setDonateProjects(false);
    //@ts-ignore
    dispatch(fetchingProjectDetails(`project-details/${slug}`));
  };
  const [p, setP] = useState(null);

  const { t } = useTranslation();
  const lang = cookies.get("i18next");

  const location = useLocation();
  const showDonationProjects = location.pathname === "/projects-donation";

  useEffect(() => {
    // donateProjects && dispatch(fetchingProjects("project"));
    showDonationProjects &&
      fetch("https://301.machtech.site/api/get-all-project")
        .then(response => response.json())
        .then(data => setP(data))
        .catch(error => console.error(error));
  }, [showDonationProjects]);

  return (
    <Modal setOpenModal={handleClose} openModal={showDonationProjects}>
      <EcosystemModal onClose={handleClose} header={t("btns.donate")}>
        <div className='donationProjects_wrapper'>
          <div className='donationProjects_title'>{t("select-project")}</div>
          {false ? (
            <div className='donationProjects_spinner'>
              <Spin size='large' />
            </div>
          ) : (
            <div className='donationProjects'>
              {p &&
                //@ts-ignore
                p?.data
                  .filter(
                    (p: any) =>
                      p.project.payment_type !== "buy" &&
                      p.project.payment_type !== "book"
                  )
                  ?.map((p: any, i: number) => {
                    return (
                      <NavLink
                        to={`/projects-donation/project-${p.project.slug}`}
                        key={i}>
                        <SingleProjectBox
                          // title={p?.project[`project_name_${lang}`]}
                          // description={removeHtmlTags(
                          //   p?.project[`problem_description_${lang}`]
                          // )}
                          flag={
                            p?.project?.payment_type !== "buy" &&
                            p?.project?.payment_type !== "book" &&
                            p.map_count
                          }
                          author={
                            p && p.project && p?.project[`project_name_${lang}`]
                          }
                          authorImg={`${storageBase}/${p?.sages?.image}`}
                          budget={p?.project?.budget_price}
                          collected={p?.collectedPrice}
                          projectImg={`${storageBase}/${p?.project?.image}`}
                          className='donation_project'
                          onClick={() => handleSingleProject(p?.project?.slug)}
                          buyBook={
                            p?.project?.payment_type !== "buy" &&
                            p?.project?.payment_type !== "book"
                          }
                        />
                      </NavLink>
                    );
                  })}
            </div>
          )}
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default DonationProjectsModal;
