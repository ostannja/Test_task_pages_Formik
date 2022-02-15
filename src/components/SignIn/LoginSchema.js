import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required()
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Cannot contain special characters or spaces'
    ),
  password: Yup.string()
    .required()
});