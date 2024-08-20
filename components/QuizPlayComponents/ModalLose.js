import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {COLOR} from '../constant/color';
import {ModeHeader} from '../ui';
import {useNavigation} from '@react-navigation/native';

const ModalLose = ({visible, mode, playAgain}) => {
  const navigatino = useNavigation();
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.rootContainer}>
        <View style={styles.subContainer}>
          <Text style={styles.gameModeText}>GAME MODE</Text>
          <ModeHeader text={mode} />
          <Text style={styles.loseText}>YOU LOOOOOSE !!</Text>
          <TouchableOpacity onPress={playAgain} style={styles.buttonRestart}>
            <Text style={styles.btnRestartText}>RESTART</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigatino.navigate('QuizGridScreen', mode)}
            style={styles.buttonRestart}>
            <Text style={styles.btnRestartText}>MENU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default ModalLose;

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: COLOR.denied + 70,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    backgroundColor: COLOR.mint,
    borderRadius: 12,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    gap: 20,
  },
  loseText: {
    fontSize: 22,
    fontWeight: '600',
    color: COLOR.denied,
  },
  buttonRestart: {
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: COLOR.brown,
    borderColor: COLOR.brown,
  },
  btnRestartText: {color: COLOR.textColor, fontWeight: '600', fontSize: 22},
  gameModeText: {fontSize: 22, fontWeight: '600', color: COLOR.brown},
});
