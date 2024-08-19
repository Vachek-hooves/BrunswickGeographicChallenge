import {StyleSheet, View} from 'react-native';
import {BlurView} from '@react-native-community/blur';

const BlurCustomContainer = ({children, blur}) => {
  return (
    <View style={styles.blurContainer}>
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
  blurContainer: {justifyContent: 'center', alignItems: 'center'},
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
