import {SafeAreaView} from 'react-native';

const SafeAreaLayout = ({children, style}) => {
  return (
    <SafeAreaView
      style={[
        style,
        {justifyContent: 'center', alignItems: 'center', height: '100%'},
      ]}>
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaLayout;
