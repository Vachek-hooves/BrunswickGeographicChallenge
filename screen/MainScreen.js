import {View} from 'react-native';
import {MenuBtn} from '../components/ui';
import {IconUser} from '../components/Icons';
import MainLayout from '../components/Layout/MainLayout';

const MainScreen = () => {
  return (
    <MainLayout blur={1} style={{alignItems: 'center'}}>
      <IconUser />
      <View style={{width: '60%'}}>
        <MenuBtn screenName={'QuizModeListScreen'}>GAME</MenuBtn>
        <MenuBtn screenName={'QuizAboutScreen'}>ABOUT</MenuBtn>
      </View>
    </MainLayout>
  );
};

export default MainScreen;
