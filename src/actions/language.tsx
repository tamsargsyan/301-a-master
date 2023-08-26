import { LANGUAGE_DITACTOR } from "../utils/actionTypes";

export const languageDitactor = (lang: string) => ({
  type: LANGUAGE_DITACTOR,
  payload: lang,
});
