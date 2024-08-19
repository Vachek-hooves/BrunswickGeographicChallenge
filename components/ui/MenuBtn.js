import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {COLOR} from '../constant/color';
import {useNavigation} from '@react-navigation/native';

const MenuBtn = ({children, screenName, mode}) => {
  const navigation = useNavigation();
  function navigateCall() {
    navigation.navigate(`${screenName}`, mode);
  }
  return (
    <TouchableOpacity onPress={navigateCall} style={styles.btn}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default MenuBtn;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 3,
    width: '100%',
    marginVertical: 20,
    borderRadius: 34,
    alignItems: 'center',
    paddingVertical: 15,
    borderColor: COLOR.teal,
    backgroundColor: COLOR.brown + 90,
  },
  text: {
    color: COLOR.textColor,
    fontSize: 38,
    fontWeight: '600',
  },
});
