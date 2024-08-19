// import {StyleSheet, Text, View} from 'react-native';
import {BlurCustomContainer, MainBgImage} from '../ui';
import SafeAreaLayout from './SafeAreaLayout';

const MainLayout = ({children, blur}) => {
  return (
    <MainBgImage>
      <BlurCustomContainer blur={blur}>
        <SafeAreaLayout>{children}</SafeAreaLayout>
      </BlurCustomContainer>
    </MainBgImage>
  );
};

export default MainLayout;

// const styles = StyleSheet.create({});
