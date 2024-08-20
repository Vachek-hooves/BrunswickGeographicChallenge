import {StyleSheet, Text, View, Animated, SafeAreaView} from 'react-native';
import {useEffect, useRef} from 'react';
import {MainBgImage} from '../components/ui';
import {COLOR} from '../components/constant/color';

const HiScreen = ({navigation}) => {
  const anime = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anime, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start(() => navigation.replace('MainScreen'));
  }, [anime]);

  return (
    <MainBgImage>
      <SafeAreaView>
        <View>
          <Text style={styles.text}>Brunswick Geographic Quiz</Text>
        </View>
      </SafeAreaView>
    </MainBgImage>
  );
};

export default HiScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    color: COLOR.brown,
    fontSize: 46,
    textAlign: 'center',
    letterSpacing: 5,
  },
});
