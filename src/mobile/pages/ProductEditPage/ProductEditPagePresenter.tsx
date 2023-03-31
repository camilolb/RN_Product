import React from 'react';
import {useLoading, useProduct, useStore} from '../../../core/hooks';
import * as yup from 'yup';
import {ProductEditPageComponent} from './ProductEditPageComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {Formik} from 'formik';
import {useFocusEffect} from '@react-navigation/native';

type NavigationScreenProps = NativeStackScreenProps<
  PrivateStackParamList,
  'ProductEdit'
>;
const ProductEditFormSchema = yup.object().shape({
  name: yup.string().required('Please enter the required field.'),
  unit_price: yup.string().required('Required'),
  stock: yup.string().required('Required'),
});

export type ProductEditFormProps = {
  name?: string;
  unit_price?: string;
  stock?: string;
};
type Props = NavigationScreenProps;

export function ProductEditPagePresenter({navigation, route}: Props) {
  const {id} = route.params;
  const {data, isLoading} = useProduct(id);
  const {setLoading} = useLoading();

  const initialValues = {
    name: data?.Name,
    unit_price: data?.Price,
    stock: data?.Stock,
  };

  const onHandleGoBack = () => {
    navigation.navigate('HomePage');
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
      validationSchema={ProductEditFormSchema}
      onSubmit={onHandleSubmit}>
      <ProductEditPageComponent onHandleGoBack={onHandleGoBack} />
    </Formik>
  );
}
