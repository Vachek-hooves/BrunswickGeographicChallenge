import {BlurCustomContainer, MainBgImage} from '../ui';
import SafeAreaLayout from './SafeAreaLayout';

const MainLayout = ({children, blur, style}) => {
  return (
    <MainBgImage>
      <BlurCustomContainer blur={blur}>
        <SafeAreaLayout style={style}>{children}</SafeAreaLayout>
      </BlurCustomContainer>
    </MainBgImage>
  );
};

export default MainLayout;
