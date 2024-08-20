import {
  ScrollView,
  StyleSheet,
  View,
  Modal,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
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
import {BlurCustomContainer, MainBgImage} from '../components/ui';
import {IMAGES} from '../data/appData';

const QuizPlayScreen = ({route, navigation}) => {
  console.log(IMAGES[0].image);
  const image = IMAGES[0].image;
  // console.log(require(`../assets/img/quizImg/${FamousPersonalities}.png`));
  const {mode, itemId} = route.params;
  const {returnQuizMode, activeNextLevelHandler} = useAppContext();
  const DATA = returnQuizMode(mode);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [unActive, setUnActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [points, setPoints] = useState(0);

  // const QUIZ_DATA = DATA.find(quiz => quiz.id === itemId).questionsBox;
  // const QUIZ_BOX = QUIZ_DATA[currentIndex];
  // const thisQuestion = QUIZ_BOX.question || '';
  // const thisOptions = QUIZ_BOX.options || '';
  // const thisAnswer = QUIZ_BOX.right || '';
  const QUIZ_DATA = DATA.find(quiz => quiz.id === itemId);
  const questionBox = QUIZ_DATA.questionsBox;
  const thisQuestion = questionBox[currentIndex].question || '';
  const thisOptions = questionBox[currentIndex].options || [];
  const thisAnswer = questionBox[currentIndex].right || '';
  const IMAGE = IMAGES.find(image => image.id === itemId).image;
  const NAME = QUIZ_DATA.header;
  console.log(NAME);

  const checkIsAnswerValid = selectedOption => {
    setCurrentOption(selectedOption);
    setCorrectOption(thisAnswer);
    setUnActive(true);
    if (selectedOption === thisAnswer) {
      setPoints(points + 1);
    }
    setActiveNextBtn(true);
  };

  const showNextQuestion = () => {
    if (currentIndex === questionBox.length - 1) {
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
