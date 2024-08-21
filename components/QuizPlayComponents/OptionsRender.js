import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../constant/color';
import {useState, useEffect} from 'react';
import {optionsHeight} from '../styles/style';

const OptionsRender = ({
  options,
  onPress,
  disabled,
  correct,
  onOption,
  rightAnswer,
}) => {
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(options);
  }, [options]);

  return (
    <View>
      {filteredOptions.map((option, i) => (
        <TouchableOpacity
          onPress={() => onPress(option)}
          disabled={disabled}
          key={i}
          style={[
            styles.optionBox,
            {
              backgroundColor:
                option === correct
                  ? COLOR.success
                  : option == onOption
                  ? COLOR.denied
                  : COLOR.pinkMatte,
            },
          ]}>
          <Text
            style={[
              styles.optionText,
              {
                color:
                  option == correct
                    ? COLOR.textColor
                    : option == onOption
                    ? COLOR.textColor
                    : COLOR.softYello,
              },
            ]}>
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default OptionsRender;

const styles = StyleSheet.create({
  optionBox: {
    marginVertical: 13,
    borderRadius: 32,
    padding: 5,
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: COLOR.teal,
    height: optionsHeight(),
  },
  optionText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 1.2,
  },
});
