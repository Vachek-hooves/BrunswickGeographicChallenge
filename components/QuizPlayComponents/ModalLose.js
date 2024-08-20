import {StyleSheet, Text, View, Modal} from 'react-native';

const ModalLose = ({visible}) => {
  return (
    <Modal visible={visible} transparent={false} animationType="slide">
      <Text>YOOU ARE LOOOOOSER</Text>
    </Modal>
  );
};

export default ModalLose;

const styles = StyleSheet.create({});
