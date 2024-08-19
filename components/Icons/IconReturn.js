import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLOR} from '../constant/color';

const IconReturn = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require('../../assets/img/icon/back.png')}
        style={{tintColor: COLOR.teal, width: 55, height: 55}}
      />
    </TouchableOpacity>
  );
};

export default IconReturn;
