// import {StyleSheet, Text, View} from 'react-native';
import {BlurCustomContainer, MainBgImage} from '../ui';
import SafeAreaLayout from './SafeAreaLayout';

const MainLayout = ({children}) => {
  return (
    <MainBgImage>
      <BlurCustomContainer blur={1}>
        <SafeAreaLayout>{children}</SafeAreaLayout>
      </BlurCustomContainer>
    </MainBgImage>
  );
};

export default MainLayout;

// const styles = StyleSheet.create({});
