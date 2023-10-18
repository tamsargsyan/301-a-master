import {
  ACCOUNT_TYPE_MODAL,
  IS_DONATE_MODAL,
  IS_HOME_PAGE,
} from "../utils/action.types";

export const openDonateModal = (val: boolean) => ({
  type: IS_DONATE_MODAL,
  payload: val,
});

export const openAccountTypeModal = (accountType: any) => ({
  type: ACCOUNT_TYPE_MODAL,
  payload: accountType,
});
export const isHomePageModal = (val: boolean) => ({
  type: IS_HOME_PAGE,
  payload: val,
});
