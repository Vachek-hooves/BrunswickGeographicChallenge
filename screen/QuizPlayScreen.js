import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppContext} from '../store/context';

const QuizPlayScreen = ({route}) => {
  const {mode, itemId} = route.params;
  // console.log(mode, itemId);

  const {returnQuizMode} = useAppContext();
  const DATA = returnQuizMode(mode);
  console.log(DATA);
  return (
    <View>
      <Text>QuizPlayScreen</Text>
    </View>
  );
};

export default QuizPlayScreen;

const styles = StyleSheet.create({});
