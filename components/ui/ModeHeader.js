import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../constant/color';

const ModeHeader = ({text}) => {
  return (
    <View
      style={{
        backgroundColor: COLOR.teal,
        width: '70%',
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 12,
        padding: 4,
      }}>
      <Text style={{color: COLOR.purple, fontWeight: '500', fontSize: 33}}>
        {text.toUpperCase()}
      </Text>
    </View>
  );
};

export default ModeHeader;

const styles = StyleSheet.create({});
