import {StyleSheet, Text, View} from 'react-native';
import {COLOR} from '../constant/color';
import {IconHint, IconLife, IconMedal} from '../Icons';

const StatisticRendering = ({score, totalQuestions, mode}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 5,
      }}>
      {mode === 'training' && (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <Text style={styles.text}>6</Text>
            <IconLife />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>{score}</Text>
            <IconMedal />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>5</Text>
            <IconHint />
          </View>
        </>
      )}
      {mode === 'exploration' && (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <Text style={styles.text}>3</Text>
            <IconLife />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>{score}</Text>
            <IconMedal />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>2</Text>
            <IconHint />
          </View>
        </>
      )}
      {mode === 'competition' && (
        <>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 4,
            }}>
            <Text style={styles.text}>2</Text>
            <IconLife />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>{score}</Text>
            <IconMedal />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={styles.text}>1</Text>
            <IconHint />
          </View>
        </>
      )}
    </View>
  );
};

export default StatisticRendering;

const styles = StyleSheet.create({
  text: {color: COLOR.yelloMatte, fontSize: 32},
});
