import {Image} from 'react-native';
import {COLOR} from '../constant/color';

const IconGameHide = () => {
  return (
    <Image
      source={require('../../assets/img/icon/hide.png')}
      style={{
        tintColor: COLOR.yelloMatte,
        width: 65,
        height: 70,
        position: 'absolute',
        alignSelf: 'center',
      }}
    />
  );
};

export default IconGameHide;
