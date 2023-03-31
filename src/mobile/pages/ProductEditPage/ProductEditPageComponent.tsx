import React from 'react';

import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Header, Label, SystemButton, TextField} from '../../mobile-ui';
import styles from './ProductEditPage.styles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFormikContext} from 'formik';
import {ProductEditFormProps} from './ProductEditPagePresenter';

type Props = {
  onHandleGoBack: () => void;
};

export function ProductEditPageComponent({onHandleGoBack}: Props) {
  const {values, handleChange, handleBlur, errors, touched, handleSubmit} =
    useFormikContext<ProductEditFormProps>();

  return (
    <>
      <View style={styles.container}>
        <Header
          options={{
            title: 'Edit Product',
            showGoBackButton: true,
            borderBottom: true,
            blackHeader: true,
            headerRight: () => (
              <SystemButton title={'SUBMIT'} onPress={handleSubmit} />
            ),
          }}
        />
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <>
            <View style={styles.containerMicroForm}>
              <Label
                fontWeight={'bold'}
                style={styles.titlePaymentForm}
                type={'h3'}>
                Card information
              </Label>

              <TextField
                autoCapitalize={'none'}
                hasError={!!errors.name}
                error={errors.name}
                placeholder={'Name'}
                containerStyle={styles.textInput}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <TextField
                autoCapitalize={'none'}
                hasError={!!errors.unit_price}
                error={errors.unit_price}
                placeholder={'Unit Price'}
                containerStyle={styles.textInput}
                onChangeText={handleChange('unit_price')}
                onBlur={handleBlur('unit_price')}
                value={values.unit_price}
              />
              <TextField
                autoCapitalize={'none'}
                hasError={!!errors.stock}
                error={errors.stock}
                placeholder={'Stock'}
                containerStyle={styles.textInput}
                onChangeText={handleChange('stock')}
                onBlur={handleBlur('stock')}
                value={values.stock}
              />
              <TextField
                autoCapitalize={'none'}
                hasError={!!errors.stock}
                error={errors.stock}
                placeholder={'Stock'}
                containerStyle={styles.textInput}
                onChangeText={handleChange('stock')}
                onBlur={handleBlur('stock')}
                value={values.stock}
              />
            </View>
          </>
        </ScrollView>
      </View>
    </>
  );
}
