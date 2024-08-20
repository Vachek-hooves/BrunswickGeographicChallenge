import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../constant/color';
import {useState, useEffect} from 'react';

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

  const removeWrongOption = () => {
    const wrongOptions = filteredOptions.filter(
      option => option !== rightAnswer,
    );

    if (wrongOptions.length >= 2) {
      const randomIndex = Math.floor(Math.random() * wrongOptions.length);
      console.log(randomIndex);
      const optionToRemove = wrongOptions[randomIndex];
      setFilteredOptions(
        filteredOptions.filter(option => option !== optionToRemove),
      );
    }
  };

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
      <TouchableOpacity
        onPress={removeWrongOption}
        style={[styles.removeButton, {backgroundColor: COLOR.teal}]}>
        <Text
          style={{color: COLOR.textColor, fontSize: 22, textAlign: 'center'}}>
          Delete wrong option
        </Text>
      </TouchableOpacity>
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
    height: 80,
  },
  optionText: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 22,
    letterSpacing: 1.2,
  },
});
