import {Text, TouchableOpacity, Alert} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const UserImagePicker = ({imageSave, children}) => {
  const responseHandlerFn = resp => {
    if (resp.didCancel) {
      Alert.alert('Canceled');
    } else if (resp.errorCode) {
      Alert.alert('error', resp.errorMessage);
    } else if (resp.assets && resp.assets.length > 0) {
      const image = resp.assets[0].uri;
      imageSave(image);
    } else {
      Alert.alert('Image was not selected');
    }
  };

  const userPhoneGallery = () => {
    const options = {storageOptions: {path: 'images'}, selectionLimit: 0};
    launchImageLibrary(options, responseHandlerFn);
  };

  return (
    <TouchableOpacity onPress={() => userPhoneGallery()}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
};

export default UserImagePicker;
