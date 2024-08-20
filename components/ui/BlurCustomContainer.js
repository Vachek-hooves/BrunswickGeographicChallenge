import {StyleSheet, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const BlurCustomContainer = ({children, blur,style}) => {
  return (
    <View style={[styles.blurContainer, style]}>
      <BlurView
        style={styles.absolute}
        blurType="dark"
        blurAmount={blur}
        // reducedTransparencyFallbackColor="white"
      />
      <View>{children}</View>
    </View>
  );
};

export default BlurCustomContainer;

const styles = StyleSheet.create({
  blurContainer: {flex: 1},
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
