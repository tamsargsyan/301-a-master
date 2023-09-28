import { IS_DONATE_MODAL } from "../utils/action.types";

export const openDonateModal = (val: boolean) => ({
  type: IS_DONATE_MODAL,
  payload: val,
});
