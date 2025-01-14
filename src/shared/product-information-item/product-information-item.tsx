import React from 'react';
import {Image, Pressable, View} from 'react-native';

import styles from './product-information-item.styles';
import {IProductEntity} from '../../core/domain';
import {Label} from '../../mobile/mobile-ui';

export interface PaymentInformationItemProps {
  data?: IProductEntity;
  onPress: (product?: IProductEntity) => void;
}

export function ProductInformationItem({
  data,
  onPress,
}: PaymentInformationItemProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: data?.Image,
        }}
        style={{width: 60, height: 60}}
      />

      <Label fontWeight={'300'} style={styles.label}>
        {data?.Title} {'\n'}
        Price: {data?.Price}
        {'\n'}
      </Label>
      <Pressable onPress={() => onPress(data)}>
        <View style={styles.containerEdit}>
          <Label fontWeight={'500'} style={styles.editLabel}>
            View
          </Label>
        </View>
      </Pressable>
    </View>
  );
}

export default ProductInformationItem;
