import {SafeAreaView} from 'react-native';

const MainLayout = ({children, style}) => {
  return <SafeAreaView style={[style, {flex: 1}]}>{children}</SafeAreaView>;
};

export default MainLayout;
