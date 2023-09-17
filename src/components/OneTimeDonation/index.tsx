import { Select } from "antd";
import EcosystemModal from "../EcosystemModal";
import Modal from "../Modal";
import "./index.css";
import Button from "../Button";
import country_currency from "../../locales/country_currency.json";

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

  return (
    <Modal setOpenModal={handleClose} openModal={oneTimeDonation}>
      <EcosystemModal onClose={handleClose} header='ONE-TIME DONATION'>
        <div className='oneTimeDonation'>
          <form>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_sum'>
                Введите сумму пожертвования
              </label>
              <div className='signUp_tel'>
                <Select
                  className='signUp_selector'
                  showSearch
                  placeholder='Select a tel'
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
                  />
                </div>
              </div>
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_name'>Ваша имя</label>
              <input
                type='text'
                id='oneTimeDonation_name'
                name='signUp'
                className='signUp_input'
              />
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_surname'>Фамилия</label>
              <input
                type='text'
                id='oneTimeDonation_surname'
                name='signUp'
                className='signUp_input'
              />
            </div>
            <div className='signUp_formGroup'>
              <label htmlFor='oneTimeDonation_email'>Электронная почта</label>
              <input
                type='text'
                id='oneTimeDonation_email'
                name='signUp'
                className='signUp_input'
              />
            </div>
            <div className='signUp_btns'>
              <Button
                text='Donation'
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
                By continuing, you agree 301’s <br></br>
                <span
                  className='mentioned_txt'
                  onClick={() => handlePrivacy("Terms of Services")}>
                  Terms of Services
                </span>{" "}
                and{" "}
                <span
                  className='mentioned_txt'
                  onClick={() => handlePrivacy("Privacy Policy")}>
                  Privacy Policy
                </span>
              </p>
            </div>
          </form>
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default OneTimeDonation;
