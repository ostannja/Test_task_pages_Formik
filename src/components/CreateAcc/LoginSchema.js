import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .required()
    .matches(
      /^[a-zA-Z0-9]+$/,
      'Cannot contain special characters or spaces'
    ),
  email: Yup.string()
    .email()
    .required(),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*=])[A-Za-z\d!@#$%^&*=]{8,}$/,
      "Weak password. \nUse at least 8 characters. \nBesides letters, include at least \na number or symbol (!@#$%^&*=)"
    )
    .required(),
  passwordConfirmation: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref('password'), null], 'Passwords must match')

});
export default LoginSchema