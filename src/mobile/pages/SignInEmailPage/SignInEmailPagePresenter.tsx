import React from 'react';
import {SignInEmailPageComponent} from './SignInEmailPageComponent';
import {Formik} from 'formik';
import * as yup from 'yup';
import {useLoginWithEmail} from '../../../core/hooks';

export type SignInEmailFormProps = {
  email: string;
  password: string;
};

const SignInEmailFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('This is not a valid email.')
    .required('Email is required.'),
  password: yup.string().required('Password is required.'),
});

export function SignInEmailPagePresenter() {
  const {mutateAsync, isLoading} = useLoginWithEmail();
  const initialValues: SignInEmailFormProps = {
    email: '',
    password: '',
  };
  const onHandleSubmit = async (values: SignInEmailFormProps) => {
    try {
      await mutateAsync({
        username: values.email,
        password: values.password,
      });
    } catch {
      console.log('error');
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInEmailFormSchema}
      onSubmit={onHandleSubmit}>
      <SignInEmailPageComponent />
    </Formik>
  );
}