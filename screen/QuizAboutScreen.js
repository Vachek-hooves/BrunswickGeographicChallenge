import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import MainLayout from '../components/Layout/MainLayout';
import {BlurCustomContainer, MainBgImage} from '../components/ui';
import {COLOR} from '../components/constant/color';
import {IconReturn} from '../components/Icons';

const QuizAboutScreen = () => {
  return (
    <MainBgImage>
      <BlurCustomContainer style={{padding: 10}}>
        <SafeAreaView style={{alignItems: 'center'}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{height: '90%'}}>
            <Text style={styles.mainHeader}>
              Brunswick Geographic Challenge Quizs
            </Text>

            <View>
              <Text style={styles.subHeader}>Overview:</Text>
              <Text style={styles.text}>
                Explore the unknown aspects of Brunswick with this quiz that
                combines diverse topics to create an engaging educational
                experience. The quiz consists of 10 topics, each with 10
                questions, and 3 answer choices. Players can progress through
                three levels of difficulty, earning medals as they answer
                questions correctly.
              </Text>
            </View>
            <View>
              <Text style={styles.text}>
                Hints Functionality: When a player taps the hint icon (question
                mark), one incorrect answer is removed from the available
                options.
              </Text>
            </View>
            <View>
              <Text style={styles.subHeader}>Game Structure:</Text>
              <Text style={styles.text}>
                Topics & Questions: Players go through the topics sequentially.
                Each topic has 10 questions.
              </Text>
              <Text style={styles.text}>
                Answer Options: Each question offers 3 possible answers.
              </Text>
              <Text style={styles.text}>
                Medals: For each correct answer, the player earns 1 medal.
              </Text>
              <Text style={styles.text}>
                Hints & Lives: Players receive varying amounts of hints and
                lives depending on the difficulty level and topic.
              </Text>
            </View>
            <View>
              <Text style={styles.subHeader}>Difficulty Levels:</Text>
              <Text style={styles.hints}>Exploration:</Text>
              <Text style={styles.hints}>Hints: 2 hints</Text>
              <Text style={styles.hints}>Lives: 5 lives</Text>
              <Text style={styles.text}>
                Gameplay: Players answer questions with no time limit. After
                each question, players can use a hint to eliminate one incorrect
                answer from the three available options.
              </Text>
            </View>
            <View>
              <Text style={styles.hints}>Competition:</Text>
              <Text style={styles.hints}>Hints: 1 hint</Text>
              <Text style={styles.hints}>Lives: 3 lives</Text>
              <Text style={styles.text}>
                Gameplay: This is a more challenging level where players must
                answer questions with limited hints and lives.
              </Text>
            </View>
            <View>
              <Text style={styles.hints}>Training:</Text>
              <Text style={styles.hints}>Hints: None</Text>
              <Text style={styles.hints}>Lives: 8 lives</Text>
              <Text style={styles.text}>
                Gameplay: A training mode where players can practice without
                hints but with more lives to spare.
              </Text>
            </View>
          </ScrollView>
          <View style={{marginTop: 10, alignSelf: 'flex-end',marginRight:50}}>
            <IconReturn />
          </View>
        </SafeAreaView>
      </BlurCustomContainer>
    </MainBgImage>
  );
};

export default QuizAboutScreen;

const styles = StyleSheet.create({
  mainHeader: {
    fontWeight: '700',
    color: COLOR.orange,
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    marginVertical: 20,
    textAlign: 'center',
    color: COLOR.orange,
    fontSize: 26,
    fontWeight: '600',
  },
  text: {
    color: COLOR.textColor,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 22,
    marginVertical: 10,
  },
  hints: {
    color: COLOR.mint,
    textAlign: 'center',
    fontSize: 18,
    letterSpacing: 2,
  },
});
