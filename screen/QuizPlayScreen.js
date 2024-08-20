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
  ModalLose,
} from '../components/QuizPlayComponents';
import {IMAGES} from '../data/appData';

const QuizPlayScreen = ({route, navigation}) => {
  const {mode, itemId} = route.params;
  const {returnQuizMode, activeNextLevelHandler} = useAppContext();
  const DATA = returnQuizMode(mode);

  const statistics = {
    training: {lives: 8, hints: 0},
    exploration: {lives: 4, hints: 2},
    competition: {lives: 1, hints: 1},
  };
  const initialLives = statistics[mode].lives;
  const initialHints = statistics[mode].hints;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [unActive, setUnActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loseModal, setLoseModal] = useState(false);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [points, setPoints] = useState(0);
  const [lives, setLives] = useState(initialLives);
  const [hints, setHints] = useState(initialHints);
  const [filteredOptions, setFilteredOptions] = useState([]);

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
        // setShowModal(true);
        setLoseModal(true);
        return;
      }
    }
    setActiveNextBtn(true);
  };

  const showNextQuestion = () => {
    if (currentIndex === questionBox.length - 1) {
      if (lives > 0) {
        setShowModal(true);
      }
    } else if (lives == 0) {
      setLoseModal(true);
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
    setLoseModal(false);
    setCurrentIndex(0);
    setCurrentOption(null);
    setCorrectOption(null);
    setUnActive(false);
    setPoints(0);
    setLives(initialLives);

    setHints(initialHints);
    setFilteredOptions([]);
  };
  const activeNextLevelTestCall = () => {
    navigation.navigate('QuizGridScreen', mode);
    activeNextLevelHandler(itemId, mode);
  };

  const handleHintPress = () => {
    if (hints > 0) {
      // Call removeWrongOption to update options
      removeWrongOption();
      // Decrement hint count
      setHints(hints - 1);
    }
  };
  const removeWrongOption = () => {
    const wrongOptions = thisOptions.filter(option => option !== thisAnswer);

    if (wrongOptions.length >= 2) {
      const randomIndex = Math.floor(Math.random() * wrongOptions.length);
      const optionToRemove = wrongOptions[randomIndex];
      setFilteredOptions(
        thisOptions.filter(option => option !== optionToRemove),
      );
    }
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
          hints={hints}
          onHintPress={handleHintPress}
        />
        <ImageRender image={IMAGE} name={NAME} />
        <QuestionRender question={thisQuestion} />
        <OptionsRender
          options={filteredOptions.length > 0 ? filteredOptions : thisOptions}
          // options={thisOptions}
          onPress={checkIsAnswerValid}
          disabled={unActive}
          correct={correctOption}
          onOption={currentOption}
          rightAnswer={thisAnswer}
        />
        {activeNextBtn && <NextBtn onPress={showNextQuestion} />}
        <ModalCustom
          visible={showModal}
          playAgain={quizGameLevelRestart}
          unlockNext={activeNextLevelTestCall}
          score={points}
          mode={mode}
        />
        <ModalLose visible={loseModal} />
        {/* <TouchableOpacity onPress={activeNextLevelTestCall}>
          <Text>active next level </Text>
        </TouchableOpacity> */}
      </ScrollView>
    </MainLayout>
  );
};

export default QuizPlayScreen;

const styles = StyleSheet.create({});
