import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  regular: {
    fontSize: '$fontSizeRegular',
  },
  h1: {
    fontWeight: '$fontWeight700',
    fontSize: '$fontSizeH1',
  },
  h2: {
    fontSize: '$fontSizeH2',
  },
  small: {
    fontSize: '$fontSizeSmall',
  },
  white: {
    color: '$white',
  },
  h3: {
    fontSize: '$fontSizeH3',
    fontWeight: '$fontWeight400',
  },
  h4: {
    fontSize: '$fontSizeH4',
  },
});

export default styles;
