import {StyleSheet, Text, View, Animated} from 'react-native';
import {useEffect, useRef} from 'react';
import {MainBgImage} from '../components/ui';

const HiScreen = ({navigation}) => {
  const anime = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anime, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [anime]);

  return <MainBgImage></MainBgImage>;
};

export default HiScreen;

const styles = StyleSheet.create({});
