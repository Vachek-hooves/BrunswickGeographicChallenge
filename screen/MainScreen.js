import {View} from 'react-native';
import SafeAreaLayout from '../components/Layout/SafeAreaLayout';
import {BlurCustomContainer, MainBgImage, MenuBtn} from '../components/ui';
import {IconUser} from '../components/Icons';
import MainLayout from '../components/Layout/MainLayout';

const MainScreen = () => {
  return (
    // <MainBgImage>
    //   <BlurCustomContainer blur={1}>
    //     <SafeAreaLayout>
          <MainLayout>
            <IconUser />
            <View style={{width: '60%'}}>
              <MenuBtn screenName={'QuizListScreen'}>GAME</MenuBtn>
              <MenuBtn screenName={'QuizAboutScreen'}>ABOUT</MenuBtn>
            </View>
          </MainLayout>
    //     </SafeAreaLayout>
    //   </BlurCustomContainer>
    // </MainBgImage>
  );
};

export default MainScreen;
