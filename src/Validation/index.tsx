import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

export const signUpSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Name should only contain letters")
    .required("Name is a required field"),
  last_name: yup
    .string()
    .matches(/^[A-Za-z]+$/, "Last Name should only contain letters")
    .required("Last Name is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Invalid email format"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number should contain only numbers")
    .required("Phone number is a required field"),
  country: yup.string().required("Country is a required field"),
  organization: yup.string().required("Organization is a required field"),
  how_did_you_know: yup.string().required("This is a required field"),
  projects_interested: yup
    .array()
    .of(yup.string())
    .required("At least one project is required")
    .min(1, "At least one project is required"),
  // participation_form: yup.string().required("This is a required field"),
  // sages_id: yup.string().required("This is a required field"),
  // type: yup.string().required("This is a required field"),
  agreement_terms: yup.string(),
  club_code_of_ethics_301: yup.string(),
  support_form: yup.string(),
  // recommendation_from: yup.string().required("This is a required field"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is a required field")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
