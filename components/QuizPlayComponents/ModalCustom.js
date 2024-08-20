import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';
import {COLOR} from '../constant/color';

const ModalCustom = ({visible, playAgain, unlockNext, score, mode}) => {
  console.log(mode);
  const shouldShowUnlockMessage = mode === 'training' && score < 8;

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View
          style={{
            width: '90%',
            backgroundColor: COLOR.brown,
            padding: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 12,
          }}>
          <TouchableOpacity onPress={playAgain} style={styles.buttonRestart}>
            <Text style={styles.btnRestartText}>RESTART</Text>
          </TouchableOpacity>

          {shouldShowUnlockMessage ? (
            <Text style={styles.message}>
              You should reach more than 8 right answers to unlock next level
            </Text>
          ) : (
            <TouchableOpacity style={styles.button} onPress={unlockNext}>
              <Text style={styles.buttonText}>UNLOCK NEXT LVL</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.mint + 90,
    padding: 20,
  },
  message: {
    color: COLOR.textColor,
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonRestart: {
    borderWidth: 1,
    width: '50%',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: COLOR.mint,
    borderColor: COLOR.brown,
  },
  btnRestartText: {color: COLOR.brown, fontWeight: '600', fontSize: 22},
});
