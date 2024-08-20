import {Pressable, StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../constant/color';

const OptionsRender = ({options, onPress, disabled, correct, onOption}) => {
  return (
    <View style={{alignItems: 'center'}}>
      {options.map((option, i) => (
        <Pressable
          onPress={() => onPress(option)}
          disabled
          key={i}
          style={[{}]}>
          <Text
            style={[
              styles.text,
              {
                color:
                  option == correct
                    ? COLOR.white
                    : option == onOption
                    ? COLOR.white
                    : COLOR.softYello,
              },
            ]}>
            {option}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default OptionsRender;

const styles = StyleSheet.create({});
