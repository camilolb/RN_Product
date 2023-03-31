import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '$borderGray',
    borderWidth: '1rem',
    borderRadius: '$defaultBorderRadius',
    padding: '$singleSpace',
    marginBottom: '$middleSpace',
  },
  label: {
    flex: 1,
    marginLeft: '$singleSpace',
  },
  editLabel: {
    justifyContent: 'flex-end',
    color: '$blue',
  },
  containerEdit: {
    alignItems: 'flex-end',
  },
  labelExpirationDate: {
    marginTop: '$singleSpace',
    fontStyle: 'italic',
  },
  image: {
    height: '50rem',
    with: '50rem',
    background: '#000',
  },
});

export default styles;
