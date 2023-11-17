import { MODAL_NAME, OPEN_PRIVACY_POLICY } from "../utils/action.types";

export const openPrivacyPolicy = (modal: boolean, privacy: null | string) => ({
  type: OPEN_PRIVACY_POLICY,
  payload: {
    modal,
    privacy,
  },
});
export const getModalName = (name: string) => ({
  type: MODAL_NAME,
  payload: name,
});
