import React from 'react';
import {useLoading, useStore} from '../../../core/hooks';
import {HomePageComponent} from './HomePageComponent';
import {IProductEntity} from '../../../core/domain';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {PrivateStackParamList} from '../../Navigation';
import {useFocusEffect} from '@react-navigation/native';

type NavigationScreenProps = NativeStackScreenProps<PrivateStackParamList>;
type Props = NavigationScreenProps;

export function HomePagePresenter({navigation}: Props) {
  const {data, isLoading} = useStore();
  const {setLoading} = useLoading();

  const onHandleEdit = (product?: IProductEntity) => {
    navigation.navigate('ProductEdit', {
      id: product?.Id,
    });
  };
  // useFocusEffect(
  //   React.useCallback(() => {
  //     setLoading(isLoading);
  //   }, [isLoading, setLoading]),
  // );

  return <HomePageComponent productList={data} onHandleEdit={onHandleEdit} />;
}
