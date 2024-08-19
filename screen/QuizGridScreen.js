import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import MainLayout from '../components/Layout/MainLayout';
import {useAppContext} from '../store/context';
import {COLOR} from '../components/constant/color';
import {useRef} from 'react';
import {IconReturn} from '../components/Icons';
import {ModeHeader} from '../components/ui';

const {width, height} = Dimensions.get('screen');
const SPACING = 20;
// 60- random size (but here it is element height, SPACING * 3)
const ITEM_SIZE = 10 + SPACING * 6;

const QuizGridScreen = ({navigation, route}) => {
  const mode = route.params;

  const {training} = useAppContext();
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <MainLayout>
      <ModeHeader text={mode} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        showsVerticalScrollIndicator={false}
        data={training}
        keyExtractor={item => item.id}
        contentContainerStyle={{padding: SPACING}}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 0.2),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('QuizPlayScreen', mode)}>
              <Animated.View
                style={{
                  // height: ITEM_SIZE,
                  padding: SPACING,
                  marginBottom: SPACING + 20,
                  borderRadius: 12,
                  borderColor: COLOR.teal,
                  backgroundColor: COLOR.purple,
                  shadowColor: COLOR.purple,
                  shadowOffset: {width: 0, height: 10},
                  shadowOpacity: 0.5,
                  shadowRadius: 5,
                  opacity,
                  transform: [{scale}],
                }}>
                <Text
                  style={{
                    fontSize: 30,
                    textAlign: 'center',
                    color: COLOR.mint,
                    fontWeight: '600',
                  }}>
                  {item.header}
                </Text>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          marginVertical: 20,
          alignSelf: 'flex-end',
          marginHorizontal: 40,
        }}>
        <IconReturn />
      </View>
    </MainLayout>
  );
};

export default QuizGridScreen;

const styles = StyleSheet.create({});
