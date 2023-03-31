import React from 'react';

import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../../mobile-ui';
import styles from './HomePage.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {IProductEntity} from '../../../core/domain';
import {ProductInformationItem} from '../../../shared';
type Props = {
  onHandleEdit: (product?: IProductEntity) => void;
  productList?: IProductEntity[];
};

export function HomePageComponent({productList, onHandleEdit}: Props) {
  return (
    <>
      <Header
        options={{
          title: 'Home Page',
          blackHeader: true,
          borderBottom: true,
        }}
      />
      <SafeAreaView edges={['bottom']} style={styles.safeAreaContainer}>
        <FlatList
          contentContainerStyle={styles.scrollViewContainer}
          data={productList}
          renderItem={({item}) => (
            <ProductInformationItem data={item} onPress={onHandleEdit} />
          )}
        />
      </SafeAreaView>
    </>
  );
}
