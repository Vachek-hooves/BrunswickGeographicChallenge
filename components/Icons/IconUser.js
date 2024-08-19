import {Image, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');
const RIGHT = width * 0.12;
const TOP = width * 0.16;

const IconUser = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{position: 'absolute', top: TOP, right: RIGHT}}
      onPress={() => {
        navigation.navigate('UserProfileScreen');
      }}>
      <Image
        source={require('../../assets/img/icon/user.png')}
        style={{width: 55, height: 55, tintColor: 'white'}}
      />
    </TouchableOpacity>
  );
};

export default IconUser;
