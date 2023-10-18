import { Select } from "antd";
import EcosystemModal from "../EcosystemModal";
import Modal from "../Modal";
import "./index.css";
import Button from "../Button";
import country_currency from "../../locales/country_currency.json";
import { useTranslation } from "react-i18next";

interface OneTimeDonationProps {
  oneTimeDonation: boolean;
  handleClose: () => void;
  setModalName: (arg: string) => void;
  setPrivacy: any;
  setOneTimeDonation: (arg: boolean) => void;
}

const OneTimeDonation: React.FC<OneTimeDonationProps> = ({
  oneTimeDonation,
  handleClose,
  setModalName,
  setPrivacy,
  setOneTimeDonation,
}) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  const filterOption = (
    input: string,
    option: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

  const handlePrivacy = (privacy: string) => {
    setPrivacy({ modal: true, privacy });
    setOneTimeDonation(false);
    setModalName("oneTimeDonation");
  };
  const { t } = useTranslation();

  return (
    <Modal setOpenModal={handleClose} openModal={oneTimeDonation}>
      <EcosystemModal
        onClose={handleClose}
        header={t("btns.one-time-donation")}>
        <div className='oneTimeDonation'>
          <form>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_sum'>
                {t("inputs.enter-donation-amount")}
              </label>
              <div className='signUp_tel'>
                <Select
                  className='signUp_selector'
                  showSearch
                  placeholder={t("inputs.choose")}
                  optionFilterProp='children'
                  onChange={onChange}
                  onSearch={onSearch}
                  //@ts-ignore
                  filterOption={filterOption}
                  options={country_currency}
                />
                <div className='signUp_telWrapper'>
                  <input
                    type='number'
                    id='oneTimeDonation_sum'
                    name='signUp'
                    className='signUp_input'
                    placeholder='0'
                  />
                </div>
              </div>
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_name'>{t("inputs.name")}</label>
              <input
                type='text'
                id='oneTimeDonation_name'
                name='signUp'
                className='signUp_input'
              />
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_surname'>
                {t("inputs.surname")}
              </label>
              <input
                type='text'
                id='oneTimeDonation_surname'
                name='signUp'
                className='signUp_input'
              />
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_email'>
                {t("sign-in.email")}
              </label>
              <input
                type='text'
                id='oneTimeDonation_email'
                name='signUp'
                className='signUp_input'
              />
            </div>
            <div className='signUp_btns'>
              <Button
                text={t("btns.donate")}
                link={false}
                to={""}
                type='submit'
                style={{
                  width: "100%",
                  background: "#A3A3A3",
                  border: "none",
                  color: "#fff",
                }}
              />
              <p>
                {t("privacy.1")}
                <br></br>
                <button
                  className='mentioned_txt'
                  onClick={() => handlePrivacy("Terms of Services")}>
                  {t("privacy.terms")}
                </button>
                {t("privacy.and")}
                <button
                  className='mentioned_txt'
                  onClick={() => handlePrivacy("Privacy Policy")}>
                  {t("privacy.privacy")}
                </button>
              </p>
            </div>
          </form>
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default OneTimeDonation;
