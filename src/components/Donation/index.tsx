import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import ONE_TIME_DONATION from "../../assets/donation-one-time.svg";
import PROJECT_DONATION from "../../assets/donation-project.svg";
import DONATION_301 from "../../assets/donation-301.svg";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { openDonateModal } from "../../actions/donateAction";
import { RootState } from "../../store/configureStore";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";

interface DonationProps {
  setSignUp: (arg: boolean) => void;
  // setDonation: (arg: boolean) => void;
  // donation: boolean;
  setOneTimeDonation: (arg: boolean) => void;
  setDonateProjects: (arg: boolean) => void;
}

const Donation: React.FC<DonationProps> = ({
  setSignUp,
  // setDonation,
  // donation,
  setOneTimeDonation,
  setDonateProjects,
}) => {
  const { t } = useTranslation();

  const donations_cards = [
    {
      id: 1,
      title: t("btns.one-time-donation"),
      desc: t("donation.one-time-donation"),
      img: ONE_TIME_DONATION,
    },
    {
      id: 2,
      title: t("btns.donate-to-project"),
      desc: t("donation.donate-to-project"),
      img: PROJECT_DONATION,
    },
    {
      id: 3,
      title: t("btns.become-301"),
      desc: t("donation.become-301"),
      img: DONATION_301,
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCard = (id: number) => {
    // id === 1 && setOneTimeDonation(true);
    id === 1 && navigate("/one-time-donation");
    // id === 2 && setDonateProjects(true);
    id === 2 && navigate("/projects-donation");
    id === 3 && navigate("/accountType?id=1?type=donor");
    // setDonation(false);
    dispatch(openDonateModal(false));
  };

  // const { isDonateModal } = useSelector(
  //   (state: RootState) => state.projectDetails
  // );

  const location = useLocation();
  const showDonation = location.pathname === "/donation";

  return (
    <Modal setOpenModal={() => navigate(-1)} openModal={showDonation}>
      <EcosystemModal onClose={() => navigate(-1)} header={t("btns.donate")}>
        <div className='donationWrapper'>
          <div className='donation'>
            {/* <div className='donation_info'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in
              </p>
            </div> */}
            <div className='donation_cards'>
              {donations_cards.map(card => (
                <div
                  className='donation_card'
                  key={card.id}
                  id={`donationCard-${card.id}`}
                  onClick={() => handleCard(card.id)}>
                  <div className='donationCard_img'>
                    <img
                      src={card.img}
                      alt={card.title}
                      decoding='async'
                      loading='lazy'
                    />
                  </div>
                  <div className='donationCard_info'>
                    <p className='donationCard_title'>{card.title}</p>
                    <p className='donationCard_desc'>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default Donation;
