import {BlurCustomContainer, MainBgImage, MenuBtn} from '../components/ui';
import SafeAreaLayout from '../components/Layout/SafeAreaLayout';
import {IconUser} from '../components/Icons';
import MainLayout from '../components/Layout/MainLayout';

const MainScreen = () => {
  return (
    // <MainBgImage>
    //   <BlurCustomContainer blur={1}>
    //     <SafeAreaLayout>
    <MainLayout>
      <IconUser />
      <MenuBtn screenName={'QuizListScreen'}>GAME</MenuBtn>
      <MenuBtn screenName={'QuizAboutScreen'}>ABOUT</MenuBtn>
    </MainLayout>
    //     </SafeAreaLayout>
    //   </BlurCustomContainer>
    // </MainBgImage>
  );
};

export default MainScreen;
