import React from 'react';
import {Pressable, TextStyle, ViewStyle} from 'react-native';
import styles from './button.styles';
import Label from '../label/label';
// import IconFacebook from '../images/svg/IconFacebook.svg';
// import IconGoogle from '../images/svg/IconGoogle.svg';
// import IconApple from '../images/svg/IconApple.svg';
// import EmailIcon from '../images/svg/EmailIcon.svg';

export interface ButtonProps {
  disabled?: boolean;
  onPress?: () => void;
  label: string;
  style?: TextStyle;
  icon?: 'facebook' | 'google' | 'apple' | 'email';
  containerStyles?: ViewStyle;
  labelStyles?: TextStyle;
  type?: 'regular' | 'transparentBordered' | 'transparent';
}

// function ButtonIcon({icon}: Pick<ButtonProps, 'icon'>) {
//   if (icon != null) {
//     switch (icon) {
//       case 'facebook':
//         return <IconFacebook />;
//       case 'google':
//         return <IconGoogle />;
//       case 'apple':
//         return <IconApple width={17} />;
//       case 'email':
//         return <EmailIcon width={17} />;
//     }
//   }
//   return null;
// }

export function Button({
  onPress,
  label,
  icon,
  containerStyles,
  labelStyles,
  type,
  disabled,
}: ButtonProps) {
  const containerStyle: ViewStyle[] = [styles.container];
  const labelStyle: TextStyle[] = [styles.text];
  if (containerStyles != null) {
    containerStyle.push(containerStyles);
  }
  if (disabled) {
    containerStyle.push(styles.containerDisabled);
  }
  if (labelStyles != null) {
    labelStyle.push(labelStyles);
  }
  switch (type) {
    case 'transparentBordered':
      containerStyle.push(styles.transparentBordered.container);
      labelStyle.push(styles.transparentBordered.text);
      break;
    case 'transparent':
      containerStyle.push(styles.transparent.container);
      labelStyle.push(styles.transparent.text);
      break;
  }

  return (
    <Pressable style={containerStyle} disabled={disabled} onPress={onPress}>
      {/* <ButtonIcon icon={icon} /> */}
      <Label type={'regular'} style={labelStyle}>
        {label}
      </Label>
    </Pressable>
  );
}

export default Button;
