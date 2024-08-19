import {SafeAreaView} from 'react-native';

const MainLayout = ({children, style}) => {
  return <SafeAreaView style={[style]}>{children}</SafeAreaView>;
};

export default MainLayout;
