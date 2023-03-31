import React from 'react';

import {Text, TextProps} from 'react-native';
import styles from './label.styles';

/* eslint-disable-next-line */
export interface LabelProps extends TextProps {
  type?: 'regular' | 'h1' | 'h2' | 'h3' | 'h4' | 'small';
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
  color?: 'white' | 'black';
}

export function Label({
  children,
  type,
  style,
  fontWeight = 'normal',
  color,
  ...props
}: LabelProps) {
  const labelStyles = [style, {fontWeight}];
  switch (type) {
    case 'regular':
      labelStyles.push(styles.regular);
      break;
    case 'h1':
      labelStyles.push(styles.h1);
      break;
    case 'h2':
      labelStyles.push(styles.h2);
      break;
    case 'small':
      labelStyles.push(styles.small);
  }

  switch (color) {
    case 'white':
      labelStyles.push(styles.white);
  }
  return (
    <Text style={labelStyles} {...props}>
      {children}
    </Text>
  );
}

export default Label;
