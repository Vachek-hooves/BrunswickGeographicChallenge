import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../constant/color';
import {IconHint, IconLife, IconMedal} from '../Icons';

const StatisticRendering = ({score, totalQuestions, mode}) => {
  const statistics = {
    training: {lives: 6, hints: 5},
    exploration: {lives: 3, hints: 2},
    competition: {lives: 2, hints: 1},
  };

  const {lives, hints} = statistics[mode] || {};

  return (
    <>
      <View style={styles.container}>
        <IconWithText value={lives} IconComponent={IconLife} />
        <IconWithText value={score} IconComponent={IconMedal} />
        <IconWithText value={hints} IconComponent={IconHint} />
      </View>
    </>
   
  );
};

export default StatisticRendering;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  text: {
    color: COLOR.yelloMatte,
    fontSize: 32,
  },
});

const IconWithText = ({value, IconComponent}) => (
  <View style={styles.iconContainer}>
    <Text style={{color: COLOR.yelloMatte, fontSize: 32}}>{value}</Text>
    <IconComponent />
  </View>
);
