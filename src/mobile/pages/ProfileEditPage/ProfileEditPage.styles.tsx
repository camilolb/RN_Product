import {Dimensions} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const entireScreenWidth = Dimensions.get('window').width;

const styles = EStyleSheet.create({
  container: {flex: 1, backgroundColor: '$white'},
  scrollViewContainer: {
    backgroundColor: '$white',
    marginTop: '$heightInput + $tripleSpace',
  },
  titlePaymentForm: {
    marginBottom: '$singleSpace',
  },
  containerMicroForm: {
    margin: '$singleSpace',
  },
  textFieldContainer: {
    marginBottom: 0,
  },
  textFieldContainerError: {
    marginBottom: 0,
  },
  fieldRows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    '@media android': {
      marginBottom: '$heightInput + $heightInput',
    },
  },
  textFieldExpDate: {
    marginBottom: 0,
    width: entireScreenWidth / 2,
  },
  textFieldCVC: {
    marginBottom: 0,
    width: entireScreenWidth / 2.5,
  },
  informationPurchase: {
    marginTop: '$smallSpace',
    marginLeft: '$smallSpace',
    color: '$subtitleLabelGray',
  },
  textInputDesign: {
    color: '#000',
  },
});

export default styles;