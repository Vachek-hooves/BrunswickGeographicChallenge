import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
export const optionsHeight = () => {
  if (height < 700) {
    return 70;
  } else {
    return 80;
  }
};
