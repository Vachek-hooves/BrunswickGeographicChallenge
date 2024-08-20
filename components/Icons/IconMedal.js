import {Image} from 'react-native';
import {COLOR} from '../constant/color';

const IconMedal = () => {
  return (
    <Image
      source={require('../../assets/img/icon/medal.png')}
      style={{
        tintColor: COLOR.yelloMatte,
        width: 40,
        height: 40,
      }}
    />
  );
};

export default IconMedal;


