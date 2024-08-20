import {Image} from 'react-native';
import {COLOR} from '../constant/color';

const IconLife = () => {
  return (
    <Image
      source={require('../../assets/img/icon/life.png')}
      style={{
        tintColor: COLOR.yelloMatte,
        width: 40,
        height: 40,
      }}
    />
  );
};

export default IconLife;
