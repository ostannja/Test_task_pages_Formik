import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import '../../pages/template.scss';
import LoginSchema from '../CreateAcc/LoginSchema';

const SignIn = () => {
  return (
    <div className="form mx-auto sign-in mb-5">
      <div className="row mt-4">
        <div className="col-lg-12 text-left mt-4">
          <h2 className="pt-1 fw-bold mb-2">Sign In</h2>
          <p className="mb-3 fs-6">Login to manage your account</p>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <Formik
            initialValues={{
              username: '', password: '', toggle: false,
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
                      } ${touched.username && !errors.username ? 'is-valid' : ''}`}
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

                <div className="form-group my-4 password ">
                  <label htmlFor="password" className="my-2">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className={`input-icon form-control form-rounded ${touched.password && errors.password ? 'is-invalid' : ''
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

                <label className='mb-1 checkbox-container' >
                  <Field type="checkbox" name="toggle" className="checkbox-input" />
                  <span className="checkbox-input-styled"></span>
                  <span className='checkbox-label fs-6'>Remember me</span>
                </label>

                <button
                  type="submit"
                  className="btn btn-block button mt-4 mb-3 col-12"
                  disabled={isSubmitting}
                >
                  <p className="m-0">
                    {isSubmitting ? 'Please wait...' : 'Sign In'}
                  </p>
                </button>
                <div className="mb-5 text-center forgot-pass">
                  Forgot password?{' '}
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
