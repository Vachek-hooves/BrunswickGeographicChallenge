import {StyleSheet, Text, View} from 'react-native';
import {BlurCustomContainer, MainBgImage, MenuBtn} from '../components/ui';
import SafeAreaLayout from '../components/Layout/SafeAreaLayout';
import MainLayout from '../components/Layout/MainLayout';

const QuizListScreen = () => {
  return (
    <MainLayout>
      <View style={{width: '80%'}}>
        <MenuBtn screenName={'TrainingScreen'}>TRAINING</MenuBtn>
        <MenuBtn screenName={'ExplorationScreen'}>EXPLORATION</MenuBtn>
        <MenuBtn screenName={'CompetitionScreen'}>COMPETITION</MenuBtn>
      </View>
    </MainLayout>
  );
};

export default QuizListScreen;

const styles = StyleSheet.create({});
