import {Image} from 'react-native';
import {COLOR} from '../constant/color';

const IconHint = () => {
  return (
    <Image
      source={require('../../assets/img/icon/hint.png')}
      style={{
        tintColor: COLOR.yelloMatte,
        width: 40,
        height: 40,
      }}
    />
  );
};

export default IconHint;
