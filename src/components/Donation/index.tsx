import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import ONE_TIME_DONATION from "../../assets/donation-one-time.svg";
import PROJECT_DONATION from "../../assets/donation-project.svg";
import DONATION_301 from "../../assets/donation-301.svg";
import "./index.css";

interface DonationProps {
  setSignUp: (arg: boolean) => void;
  setDonation: (arg: boolean) => void;
  donation: boolean;
}

const Donation: React.FC<DonationProps> = ({
  setSignUp,
  setDonation,
  donation,
}) => {
  const donations_cards = [
    {
      id: 1,
      title: "one-time donation",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      img: ONE_TIME_DONATION,
    },
    {
      id: 2,
      title: "donate to the project",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
      img: PROJECT_DONATION,
    },
    {
      id: 3,
      title: "become one of 301",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ",
      img: DONATION_301,
    },
  ];

  const handleCard = (id: number) => {
    id === 3 && setSignUp(true);
    setDonation(false);
  };

  return (
    <Modal setOpenModal={setDonation} openModal={donation}>
      <EcosystemModal onClose={() => console.log("asd")} header='donate'>
        <div className='donationWrapper'>
          <div className='donation'>
            <div className='donation_info'>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in
              </p>
            </div>
            <div className='donation_cards'>
              {donations_cards.map(card => (
                <div
                  className='donation_card'
                  key={card.id}
                  id={`donationCard-${card.id}`}
                  onClick={() => handleCard(card.id)}>
                  <div className='donationCard_img'>
                    <img src={card.img} alt={card.title} />
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