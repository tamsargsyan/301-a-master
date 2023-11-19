import {
  MODAL_NAME,
  OPEN_PRIVACY_POLICY,
  AGREEMENT_TERMS,
} from "../utils/action.types";

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
export const getAgreementTerms = (
  val: boolean,
  text: string | null,
  from: string
) => ({
  type: AGREEMENT_TERMS,
  payload: {
    modal: val,
    text,
    from,
  },
});
