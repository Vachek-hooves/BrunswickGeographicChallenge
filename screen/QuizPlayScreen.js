import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const QuizPlayScreen = ({route}) => {
  const mode = route.params;
  console.log(mode);
  return (
    <View>
      <Text>QuizPlayScreen</Text>
    </View>
  );
};

export default QuizPlayScreen;

const styles = StyleSheet.create({});
