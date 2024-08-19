import {BlurCustomContainer, MainBgImage, MenuBtn} from '../components/ui';
import MainLayout from '../components/Layout/MainLayout';
import {IconUser} from '../components/Icons';

const MainScreen = () => {
  return (
    <MainBgImage>
      <BlurCustomContainer blur={1}>
        <MainLayout>
          <IconUser />
          <MenuBtn screenName={'QuizListScreen'}>GAME</MenuBtn>
          <MenuBtn screenName={'QuizAboutScreen'}>ABOUT</MenuBtn>
        </MainLayout>
      </BlurCustomContainer>
    </MainBgImage>
  );
};

export default MainScreen;
