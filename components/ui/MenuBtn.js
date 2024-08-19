import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {COLOR} from '../constant/color';
import {useNavigation} from '@react-navigation/native';

const MenuBtn = ({children, screenName, difficulty}) => {
  const navigation = useNavigation();
  function navigateCall() {
    navigation.navigate(`${screenName}`, difficulty);
  }
  return (
    <TouchableOpacity onPress={navigateCall}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MenuBtn;

const styles = StyleSheet.create({
  text: {
    color: COLOR.textColor,
  },
});
