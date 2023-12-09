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
export const forgetPassShcema = yup.object().shape({
  email: yup
    .string()
    .required("Email is a required field")
    .email("Invalid email format"),
});
export const changePassSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is a required field")
    .oneOf([yup.ref("password")], "Passwords must match"),
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
    .matches(/^[0-9]+$/, "Phone number should contain only numbers"),
  country: yup.string().required("Country is a required field"),
  organization: yup.string().required("Organization is a required field"),
  how_did_you_know: yup.string().required("This is a required field"),
  projects_interested: yup
    .array()
    .of(yup.string())
    .required("At least one project is required")
    .min(1, "At least one project is required"),
  recommendation_from: yup.string().required("This is a required field"),
  password: yup
    .string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Password confirmation is a required field")
    .oneOf([yup.ref("password")], "Passwords must match"),
  support_form: yup.boolean().oneOf([true], "This field must be true"),
  club_code_of_ethics_301: yup
    .boolean()
    .oneOf([true], "This field must be true"),
  agreement_terms: yup.boolean().oneOf([true], "This field must be true"),
});

export const doanteSignUpSchema = yup.object().shape({
  ...signUpSchema.fields,
  subscription_type: yup.string().required("This is a required field"),
});

export const otherSignUpSchema = yup.object().shape({
  ...signUpSchema.fields,
  participation_form: yup.string().required("This is a required field"),
  sages_id: yup.string().required("This is a required field"),
});

export const donationSchema = yup.object().shape({
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
  amount: yup
    .number()
    .typeError("Amount must be a number")
    .positive("Amount must be a positive number")
    .required("Amount is a required field"),
});

export const recommendationSchema = yup.object().shape({
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
    .matches(/^[0-9]+$/, "Phone number should contain only numbers"),
  country: yup.string().required("Country is a required field"),
});

export const socialMediaRegisterSchema = yup.object().shape({
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
    .matches(/^[0-9]+$/, "Phone number should contain only numbers"),
  country: yup.string().required("Country is a required field"),
  organization: yup.string().required("Organization is a required field"),
  how_did_you_know: yup.string().required("This is a required field"),
  projects_interested: yup
    .array()
    .of(yup.string())
    .required("At least one project is required")
    .min(1, "At least one project is required"),
  recommendation_from: yup.string().required("This is a required field"),
});

export const contactSchema = yup.object().shape({
  name: yup.string().required("This is a required field"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Invalid email format"),
  message: yup.string().required("This is a required field"),
});

export const editProfileSchema = yup.object().shape({
  name: yup.string().required("Name is a required field"),
  last_name: yup.string().required("Last Name is a required field"),
  about_me: yup.string(),
  // .matches(/^[A-Za-z]+$/, "Last Name should only contain letters"),
  // .required("Last Name is a required field"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone number should contain only numbers"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Invalid email format"),
});
