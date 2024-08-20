import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

const ModalCustom = ({visible, playAgain, unlockNext, score}) => {
  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>ModalCustom</Text>
        <TouchableOpacity onPress={playAgain}>
          <Text>RESTART</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={unlockNext}>
          <Text>UNLOCK NEXT LVL</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({});
