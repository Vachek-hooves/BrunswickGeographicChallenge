import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLOR} from '../constant/color';

const NextBtn = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>NEXT QUESTION</Text>
    </TouchableOpacity>
  );
};

export default NextBtn;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    borderColor: COLOR.mint,
    backgroundColor: COLOR.purple,
    borderRadius: 12,
    borderWidth: 2,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: COLOR.mint,
    textAlign: 'center',
  },
});
