import {SafeAreaView} from 'react-native';

const SafeAreaLayout = ({children, style}) => {
  return <SafeAreaView style={[style]}>{children}</SafeAreaView>;
};

export default SafeAreaLayout;
