import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../pages/template.scss';
import LoginSchema from './LoginSchema';

const CreateAcc = () => {
  return (
    <div className="form mx-auto create-acc mb-5">
      <div className="row mt-4">
        <div className="col-lg-12 text-left mt-4">
          <h2 className="pt-1 fw-bold mb-2">Create an account</h2>
          <p className="mb-3 fs-6">Sign up to manage your account</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              username: '',
              email: '',
              timezone: '',
              password: '',
              passwordConfirmation: '',
              toggle: false,
              checked: [],
            }}
            validationSchema={LoginSchema}
            onSubmit={({ setSubmitting }) => {
              setSubmitting(false);
            }}
          >
            {({ touched, errors, isSubmitting }) => (
              <Form>
                <div className="form-group my-4 username">
                  <label htmlFor="username" className="my-2">
                    Username
                  </label>
                  <Field
                    type="text"
                    name="username"
                    placeholder="Username"
                    className={`input-icon form-control ${touched.username && errors.username ? 'is-invalid' : ''
                      } ${touched.username && !errors.username ? 'is-valid' : ''
                      }`}
                  />
                  <ErrorMessage name="username">
                    {msg => (
                      <div className="invalid-feedback">
                        <div className="triangle"></div>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="form-group my-4 email">
                  <label htmlFor="email" className="my-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`input-icon form-control ${touched.email && errors.email ? 'is-invalid' : ''
                      } ${touched.email && !errors.email ? 'is-valid' : ''}`}
                  />
                  <ErrorMessage name="email">
                    {msg => (
                      <div className="invalid-feedback">
                        <div className="triangle"></div>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="form-group my-4 timezone">
                  <label htmlFor="location" className="my-2">
                    Select timezone
                  </label>
                  <Field
                    component="select"
                    name="location"
                    className={`input-icon form-control ${touched.timezone && errors.timezone ? 'is-invalid' : ''
                      } ${touched.timezone && !errors.timezone ? 'is-valid' : ''
                      }`}
                  >
                    <option value="" label="Select timezone" />
                    <option value="Kyiv">Europe/Kyiv (GMT +2)</option>
                    <option value="London">Europe/London (GMT +0)</option>
                    <option value="USA">America/New_York (GMT -5)</option>
                  </Field>
                  <ErrorMessage name="timezone">
                    {msg => (
                      <div className="invalid-feedback">
                        <div className="triangle"></div>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="form-group mb-4 password ">
                  <label htmlFor="password" className="my-2">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`input-icon form-control ${touched.password && errors.password ? 'is-invalid' : ''
                      } ${touched.password && !errors.password ? 'is-valid' : ''
                      }`}
                  />

                  <ErrorMessage name="password">
                    {msg => (
                      <div className="invalid-feedback">
                        <div className="triangle"></div>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <div className="form-group mb-4 password ">
                  <label htmlFor="password" className="my-2">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Password"
                    className={`input-icon form-control ${touched.passwordConfirmation &&
                      errors.passwordConfirmation
                      ? 'is-invalid'
                      : ''
                      } ${touched.passwordConfirmation &&
                        !errors.passwordConfirmation
                        ? 'is-valid'
                        : ''
                      }`}
                  />

                  <ErrorMessage name="passwordConfirmation">
                    {msg => (
                      <div className="invalid-feedback">
                        <div className="triangle"></div>
                        {msg}
                      </div>
                    )}
                  </ErrorMessage>
                </div>

                <label className="mt-2 mb-1 checkbox-container">
                  <Field
                    type="checkbox"
                    name="toggle"
                    className="checkbox-input"
                  />
                  <span className="checkbox-input-styled"></span>
                  <span className="checkbox-label fs-6">I agree to <a href="formic.org">Terms & Privacy Policy</a></span>
                </label>

                <button
                  type="submit"
                  className="btn btn-block button mt-4 mb-3 col-12"
                  disabled={isSubmitting}
                >
                  <p className="m-0">
                    {isSubmitting ? 'Please wait...' : 'Create an account'}
                  </p>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default CreateAcc;
