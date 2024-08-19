import {StyleSheet, View} from 'react-native';
import {MenuBtn} from '../components/ui';
import MainLayout from '../components/Layout/MainLayout';
import {IconReturn} from '../components/Icons';

const QuizListScreen = () => {
  return (
    <MainLayout>
      <View style={{width: '80%', gap: 20}}>
        <MenuBtn screenName={'TrainingScreen'}>TRAINING</MenuBtn>
        <MenuBtn screenName={'ExplorationScreen'}>EXPLORATION</MenuBtn>
        <MenuBtn screenName={'CompetitionScreen'}>COMPETITION</MenuBtn>
      </View>
      <View style={{position: 'absolute', bottom: 60, right: 60}}>
        <IconReturn />
      </View>
    </MainLayout>
  );
};

export default QuizListScreen;

const styles = StyleSheet.create({});
