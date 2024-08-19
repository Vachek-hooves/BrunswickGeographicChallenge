import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const QuestionRender = ({question}) => {
  return (
    <View>
      <Text style={{textAlign: 'center'}}>{question}</Text>
    </View>
  );
};

export default QuestionRender;

const styles = StyleSheet.create({});
