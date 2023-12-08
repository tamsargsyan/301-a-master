import { useLocation, useNavigate } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchingDonation } from "../actions/apiActions";
import { RootState } from "../store/configureStore";
import cookies from "js-cookie";
import { congratsModal } from "../actions/congratsAction";
import { useTranslation } from "react-i18next";

const Thanks = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { data } = useSelector((state: RootState) => state.donation);
  const navigate = useNavigate();
  const lang = cookies.get("i18next");
  const { t } = useTranslation();

  useEffect(() => {
    if (location.search) {
      //@ts-ignore
      dispatch(fetchingDonation(`thanks${location.search}`));
    }
  }, [location]);

  useEffect(() => {
    if (data) {
      if (
        data.message === "Payment successfully completed" &&
        data.donation?.status === "paid"
      ) {
        dispatch(congratsModal(true, t("donation.payment.completed")));
        navigate(`/${lang}/`);
      } else if (
        data.message === "Payment declined" &&
        data.donation?.status === "rejected"
      ) {
        dispatch(congratsModal(true, t("donation.payment.declined")));
        navigate(`/${lang}/`);
      }
    }
  }, [data]);

  return (
    <div
      style={{
        height: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <h1>{t("donation.payment.checking")}</h1>
    </div>
  );
};

export default Thanks;
