import {ImageBackground} from 'react-native';

const MainBgImage = ({children}) => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('../../assets/img/bg/BrunswickBG.jpg')}>
      {children}
    </ImageBackground>
  );
};

export default MainBgImage;
