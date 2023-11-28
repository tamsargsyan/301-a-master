import Modal from "../Modal";
import EcosystemModal from "../EcosystemModal";
import SingleProjectBox from "../SingleProjectBox";
import Button from "../Button";
import { Select, Spin } from "antd";
import country_currency from "../../locales/country_currency.json";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/configureStore";
import { storageBase } from "../../utils/storage";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router";

const DonateToTheProject = () => {
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

  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
    // if (from !== "projectDetails") setDonateProjects(true);
    // dispatch(openDonateSingleProject(false, ""));
  };
  const { data, loading } = useSelector(
    (state: RootState) => state.projectDetails
  );
  const { t } = useTranslation();
  const lang = useSelector((state: RootState) => state.languageDitactor.lang);
  const location = useLocation();
  const showDonateToTheProject =
    location.pathname.includes(`/projects-donation/project-`) ||
    location.pathname.includes(
      `/projects/${data?.project?.slug}/projects-donation/project-`
    );

  return (
    <Modal
      setOpenModal={handleClose}
      openModal={showDonateToTheProject}
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
                  // title={data?.project?.project_name_am}
                  // description={removeHtmlTags(
                  //   data?.project?.problem_description_en
                  // )}
                  flag={
                    data?.project?.payment_type !== "buy" &&
                    data?.project?.payment_type !== "book" &&
                    data?.map_count
                  }
                  author={
                    data &&
                    data.project &&
                    data?.project[`project_name_${lang}`]
                  }
                  authorImg={`${storageBase}/${data?.user?.image}`}
                  budget={data?.project?.budget_price}
                  collected={data?.collectedPrice}
                  projectImg={`${storageBase}/${data?.project?.image}`}
                  className='donation_project donateToProject'
                  buyBook={true}
                />
              </div>
              <form>
                {data?.project?.payment_type !== "buy" &&
                  data?.project?.payment_type !== "book" && (
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
                            placeholder={"0"}
                            readOnly={data?.project?.payment_type === "buy"}
                          />
                        </div>
                      </div>
                    </div>
                  )}
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
                    text={
                      data?.project?.payment_type === "buy"
                        ? t("buy")
                        : t("btns.donate")
                    }
                    link={false}
                    to={""}
                    type='submit'
                    style={{
                      width: "100%",
                      background: "#A3A3A3",
                      border: "none",
                      color: "#fff",
                    }}
                    className='donation_btn'
                  />
                  <p>
                    {t("privacy.1")}
                    <br></br>
                    <NavLink className='mentioned_txt' to='/terms-of-services'>
                      {t("privacy.terms")}
                    </NavLink>{" "}
                    {t("privacy.and")}{" "}
                    <NavLink className='mentioned_txt' to='/privacy-policy'>
                      {t("privacy.privacy")}
                    </NavLink>
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
