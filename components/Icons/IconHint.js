import {Image} from 'react-native';
import {COLOR} from '../constant/color';

const IconHint = () => {
  return (
    <Image
      source={require('../../assets/img/icon/hint.png')}
      style={{
        tintColor: COLOR.yelloMatte,
        width: 30,
        height: 30,
      }}
    />
  );
};

export default IconHint;
