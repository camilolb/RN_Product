import React from 'react';
import {useLoading, useProduct} from '../../../core/hooks';
import * as yup from 'yup';
import {ProductEditPageComponent} from './ProductEditPageComponent';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {Formik} from 'formik';
import {useFocusEffect} from '@react-navigation/native';
import {IProductEntity} from '../../../core/domain';
import {CartStoragetype, useCart} from '../../../core/frameworks/jotai';

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

export function ProductEditPagePresenter({route}: Props) {
  const [cartInformation, setCartInformation] = useCart();
  const {products} = cartInformation as CartStoragetype;
  const {id} = route.params;
  const {data, isLoading} = useProduct(id);
  const {setLoading} = useLoading();

  const initialValues = {
    name: data?.Title,
    unit_price: data?.Price,
    stock: data?.Price,
  };

  const onHandleSubmit = () => {
    console.log('TODO');
  };

  const onHandleAddCart = (product?: IProductEntity) => {
    const res = [...products, product || []];
    setCartInformation({products: res});
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
      <ProductEditPageComponent
        onHandleAddCart={onHandleAddCart}
        product={data}
      />
    </Formik>
  );
}
