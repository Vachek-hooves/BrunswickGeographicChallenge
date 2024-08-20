import {StyleSheet, Text, View, Modal, TouchableOpacity} from 'react-native';

const ModalCustom = ({visible, playAgain}) => {
  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <View style={{justifyContent: 'center', marginTop: 200,}}>
        <Text>ModalCustom</Text>
        <TouchableOpacity onPress={playAgain}>
          <Text>RESTART</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({});
