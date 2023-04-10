import React from 'react';
import {Image, ScrollView, View} from 'react-native';
import {Button, Header, Label} from '../../mobile-ui';
import styles from './ProductEditPage.styles';
import {IProductEntity} from '../../../core/domain';

interface Props {
  onHandleAddCart: (product?: IProductEntity) => void;
  product?: IProductEntity;
}

export function ProductEditPageComponent({onHandleAddCart, product}: Props) {
  return (
    <>
      <View style={styles.container}>
        <Header
          options={{
            title: 'Product information',
            showGoBackButton: true,
            borderBottom: true,
            blackHeader: true,
          }}
        />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <>
            <Image source={{uri: product?.Image}} style={styles.image} />
            <View style={styles.productDescriptionContainer}>
              <Label
                fontWeight={'bold'}
                style={styles.titleProductDescription}
                type={'h2'}>
                {product?.Title}
              </Label>
              <Label
                fontWeight={'bold'}
                style={styles.titleProductDescription}
                type={'h3'}>
                {'Description'}
              </Label>
              <Label
                fontWeight={'300'}
                style={styles.titleProductDescription}
                type={'h3'}>
                {product?.Description}
              </Label>
              <Label
                fontWeight={'bold'}
                style={styles.titleProductDescription}
                type={'h3'}>
                {'Price'}
              </Label>
              <Label
                fontWeight={'300'}
                style={styles.titleProductDescription}
                type={'h3'}>
                {'$'}
                {product?.Price}
                {' USD'}
              </Label>
            </View>
          </>
        </ScrollView>
        <View style={styles.logoutButtonContainer}>
          <Button
            label={'Add to cart'}
            type={'black'}
            containerStyles={styles.buttonLogout}
            onPress={() => onHandleAddCart(product)}
          />
        </View>
      </View>
    </>
  );
}
