import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLOR} from '../constant/color';

const QuestionRender = ({question}) => {
  return (
    <View style={{height: 120, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center', color: COLOR.textColor, fontSize: 22}}>
        {question}
      </Text>
    </View>
  );
};

export default QuestionRender;

const styles = StyleSheet.create({});
