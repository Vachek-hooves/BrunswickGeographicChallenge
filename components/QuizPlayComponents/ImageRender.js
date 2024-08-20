import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import React from 'react';
import {COLOR} from '../constant/color';
import {BlurCustomContainer} from '../ui';

const ImageRender = ({image, name}) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{
        height: 150,
        width: ' 100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: COLOR.orange,
          fontSize: 18,
          letterSpacing: 2,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        {name}
      </Text>
    </ImageBackground>
  );
};

export default ImageRender;

const styles = StyleSheet.create({});
