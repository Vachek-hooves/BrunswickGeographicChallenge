import {StyleSheet, Text, View} from 'react-native';
import {BlurCustomContainer, MainBgImage} from '../components/ui';
import MainLayout from '../components/Layout/MainLayout';

const MainScreen = ({navigation}) => {
  return (
    <MainBgImage>
      {/* <BlurCustomContainer blur={1}> */}
        <MainLayout></MainLayout>
      {/* </BlurCustomContainer> */}
    </MainBgImage>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
