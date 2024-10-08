import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../constant/color';
import {IconHint, IconLife, IconMedal} from '../Icons';

const StatisticRendering = ({score, totalQuestions, mode, lives, hints}) => {
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
    marginBottom: 5,
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
  <TouchableOpacity style={styles.iconContainer}>
    <Text style={{color: COLOR.yelloMatte, fontSize: 32}}>{value}</Text>
    <IconComponent />
  </TouchableOpacity>
);
