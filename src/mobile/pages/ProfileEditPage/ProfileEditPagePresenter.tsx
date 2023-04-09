import React from 'react';
import {useLoading, useProduct} from '../../../core/hooks';
import * as yup from 'yup';
import {ProfilePageComponent} from './ProfilePageComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {Formik} from 'formik';
import {useFocusEffect} from '@react-navigation/native';

type NavigationScreenProps = NativeStackScreenProps<
  PrivateStackParamList,
  'ProfilePage'
>;
const ProfilePageFormSchema = yup.object().shape({
  name: yup.string().required('Please enter the required field.'),
  unit_price: yup.string().required('Required'),
  stock: yup.string().required('Required'),
});

export type ProfilePageFormProps = {
  name?: string;
  unit_price?: string;
  stock?: string;
};
type Props = NavigationScreenProps;

export function ProfilePagePagePresenter({route}: Props) {
  const {setLoading} = useLoading();

  const initialValues = {
    name: data?.Name,
    unit_price: data?.Price,
    stock: data?.Stock,
  };

  const onHandleSubmit = () => {
    console.log('TODO');
  };

  useFocusEffect(
    React.useCallback(() => {
      setLoading(isLoading);
    }, [isLoading, setLoading]),
  );

  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={ProfilePageFormSchema}
      onSubmit={onHandleSubmit}>
      <ProfilePageComponent />
    </Formik>
  );
}
