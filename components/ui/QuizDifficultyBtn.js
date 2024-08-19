import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const QuizDifficultyBtn = ({children}) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default QuizDifficultyBtn;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 2,
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
