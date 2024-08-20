import {ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useAppContext} from '../store/context';
import MainLayout from '../components/Layout/MainLayout';
import {
  QuestionRender,
  OptionsRender,
  NextBtn,
  ModalCustom,
  ImageRender,
  StatisticRendering,
} from '../components/QuizPlayComponents';
import {IMAGES} from '../data/appData';

const QuizPlayScreen = ({route, navigation}) => {
  const {mode, itemId} = route.params;
  const {returnQuizMode, activeNextLevelHandler} = useAppContext();
  const DATA = returnQuizMode(mode);

  const statistics = {
    training: {lives: 8, hints: 0},
    exploration: {lives: 3, hints: 2},
    competition: {lives: 1, hints: 1},
  };
  const initialLives = statistics[mode].lives;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [unActive, setUnActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(initialLives);

  const QUIZ_DATA = DATA.find(quiz => quiz.id === itemId);
  const questionBox = QUIZ_DATA.questionsBox;
  const thisQuestion = questionBox[currentIndex].question || '';
  const thisOptions = questionBox[currentIndex].options || [];
  const thisAnswer = questionBox[currentIndex].right || '';
  const IMAGE = IMAGES.find(image => image.id === itemId).image;
  const NAME = QUIZ_DATA.header;

  const checkIsAnswerValid = selectedOption => {
    setCurrentOption(selectedOption);
    setCorrectOption(thisAnswer);
    setUnActive(true);

    if (selectedOption === thisAnswer) {
      setPoints(points + 1);
    } else {
      setLives(prevLives => prevLives - 1);
      if (lives - 1 <= 0) {
        setShowModal(true);
      }
    }
    setActiveNextBtn(true);
  };

  const showNextQuestion = () => {
    if (currentIndex === questionBox.length - 1 || lives === 0) {
      setShowModal(true);
    } else {
      setCurrentIndex(currentIndex + 1);
      setCurrentOption(null);
      setCorrectOption(null);
      setUnActive(false);
      setActiveNextBtn(false);
    }
  };

  const quizGameLevelRestart = () => {
    setShowModal(false);
    setCurrentIndex(0);
    setCurrentOption(null);
    setCorrectOption(null);
    setUnActive(false);
    setPoints(0);
    setLives(initialLives);
  };
  const activeNextLevelTestCall = () => {
    navigation.navigate('QuizGridScreen', mode);
    activeNextLevelHandler(itemId, mode);
  };

  return (
    <MainLayout blur={9}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}>
        <StatisticRendering
          score={points}
          totalQuestions={questionBox.length}
          mode={mode}
          lives={lives}
        />
        <ImageRender image={IMAGE} name={NAME} />
        <QuestionRender question={thisQuestion} />
        <OptionsRender
          options={thisOptions}
          onPress={checkIsAnswerValid}
          disabled={unActive}
          correct={correctOption}
          onOption={currentOption}
        />
        {activeNextBtn && <NextBtn onPress={showNextQuestion} />}
        <ModalCustom
          visible={showModal}
          playAgain={quizGameLevelRestart}
          unlockNext={activeNextLevelTestCall}
          score={points}
        />
        {/* <TouchableOpacity onPress={activeNextLevelTestCall}>
          <Text>active next level </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </MainLayout>
  );
};

export default QuizPlayScreen;

const styles = StyleSheet.create({});
