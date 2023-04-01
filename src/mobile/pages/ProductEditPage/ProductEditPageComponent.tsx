import React from 'react';
import {ScrollView, View} from 'react-native';
import {Header, Label, SystemButton, TextField} from '../../mobile-ui';
import styles from './ProductEditPage.styles';
import {useFormikContext} from 'formik';
import {ProductEditFormProps} from './ProductEditPagePresenter';

export function ProductEditPageComponent() {
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
                Product information
              </Label>

              <TextField
                autoCapitalize={'none'}
                hasError={!!errors.name}
                error={errors.name}
                placeholder={'Name'}
                containerStyle={styles.textInputDesign}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <TextField
                autoCapitalize={'none'}
                hasError={!!errors.unit_price}
                error={errors.unit_price}
                placeholder={'Unit Price'}
                containerStyle={styles.textInputDesign}
                onChangeText={handleChange('unit_price')}
                onBlur={handleBlur('unit_price')}
                value={values.unit_price?.toString()}
              />
              <TextField
                autoCapitalize={'none'}
                hasError={!!errors.stock}
                error={errors.stock}
                placeholder={'Stock'}
                containerStyle={styles.textInputDesign}
                onChangeText={handleChange('stock')}
                onBlur={handleBlur('stock')}
                value={values.stock?.toString()}
              />
            </View>
          </>
        </ScrollView>
      </View>
    </>
  );
}
