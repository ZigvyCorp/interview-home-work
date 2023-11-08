import * as yup from "yup";

export const LOGIN_SCHEMA = yup.object().shape({
  phone: yup.string().required("This field is required"),
  password: yup.string().required("This field is required"),
});
