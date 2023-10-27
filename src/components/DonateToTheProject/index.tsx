import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import SingleProjectBox from "../SingleProjectBox";
import Button from "../Button";
import { Select, Spin } from "antd";
import country_currency from "../../locales/country_currency.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./index.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { storageBase } from "../../utils/storage";
import { removeHtmlTags } from "../../globalFunctions/removeHtmlTags";
import { useTranslation } from "react-i18next";

interface DonateToTheProjectProps {
  setDonateProjects: (arg: boolean) => void;
  setDonateSingleProject: (arg: boolean) => void;
  donateSingleProject: boolean;
  setPrivacy: any;
  setModalName: (arg: string) => void;
}

const DonateToTheProject: React.FC<DonateToTheProjectProps> = ({
  donateSingleProject,
  setDonateSingleProject,
  setDonateProjects,
  setModalName,
  setPrivacy,
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
    setDonateSingleProject(false);
    setModalName("donateToProject");
  };

  const handleClose = () => {
    setDonateProjects(true);
    setDonateSingleProject(false);
  };
  const { data, loading } = useSelector(
    (state: RootState) => state.projectDetails
  );
  const { t } = useTranslation();

  return (
    <Modal
      setOpenModal={handleClose}
      openModal={donateSingleProject}
      headerShow={true}>
      <EcosystemModal
        onClose={handleClose}
        header={t("btns.donate-to-project")}>
        <div className='chosenProject_wrapper'>
          {loading ? (
            <div className='donationProjects_spinner'>
              <Spin size='large' />
            </div>
          ) : (
            <>
              <div className='chosenProject_project'>
                <div className='chosenProject'>{t("chosenProject")}</div>
                <SingleProjectBox
                  title={data?.project?.project_name_am}
                  description={removeHtmlTags(
                    data?.project?.problem_description_en
                  )}
                  flag={data?.map_count}
                  author={`${data?.user?.name} ${data?.user?.last_name}`}
                  authorImg={`${storageBase}/${data?.user?.image}`}
                  budget={data?.project?.budget_price}
                  collected={data?.collectedPrice}
                  projectImg={`${storageBase}/${data?.project?.image}`}
                  className='donation_project donateToProject'
                />
              </div>
              <form>
                <div className='signUp_formGroup'>
                  <label htmlFor='donateProject_sum'>
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
                        id='donateProject_sum'
                        name='signUp'
                        className='signUp_input'
                        placeholder='0'
                      />
                    </div>
                  </div>
                </div>
                <div className='signUp_formGroup'>
                  <label htmlFor='donateProject_name'>{t("inputs.name")}</label>
                  <input
                    type='text'
                    id='donateProject_name'
                    name='signUp'
                    className='signUp_input'
                  />
                </div>
                <div className='signUp_formGroup'>
                  <label htmlFor='donateProject_surname'>
                    {t("inputs.surname")}
                  </label>
                  <input
                    type='text'
                    id='donateProject_surname'
                    name='signUp'
                    className='signUp_input'
                  />
                </div>
                <div className='signUp_formGroup'>
                  <label htmlFor='donateProject_email'>
                    {t("sign-in.email")}
                  </label>
                  <input
                    type='text'
                    id='donateProject_email'
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
            </>
          )}
        </div>
      </EcosystemModal>
    </Modal>
  );
};

export default DonateToTheProject;
