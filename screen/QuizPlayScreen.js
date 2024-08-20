import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useAppContext} from '../store/context';
import MainLayout from '../components/Layout/MainLayout';
import {QuestionRender} from '../components/QuizPlayComponents';
import OptionsRender from '../components/QuizPlayComponents/OptionsRender';

const QuizPlayScreen = ({route}) => {
  const {mode, itemId} = route.params;
  const {returnQuizMode} = useAppContext();
  const DATA = returnQuizMode(mode);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentOption, setCurrentOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [unActive, setUnActive] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeNextBtn, setActiveNextBtn] = useState(false);
  const [points, setPoints] = useState(0);

  const QUIZ_DATA = DATA.find(quiz => quiz.id === itemId).questionsBox;
  const QUIZ_BOX = QUIZ_DATA[currentIndex];
  const thisQuestion = QUIZ_BOX.question || '';
  const thisOptions = QUIZ_BOX.options || '';
  const thisAnswer = QUIZ_BOX.right || '';

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
    if (currentIndex + 1 === QUIZ_DATA.length) {
      setShowModal(true);
    }
    setCurrentIndex(currentIndex + 1);
    setCurrentOption(null);
    setCorrectOption(null);
    setUnActive(false);
    setActiveNextBtn(false);
  };

  const quizGameLevelRestart = () => {
    setShowModal(false);
    setCurrentIndex(0);
    setCurrentOption(null);
    setCorrectOption(null);
    setUnActive(false);
    setPoints(0);
  };

  return (
    <MainLayout blur={9}>
      <ScrollView>
        <QuestionRender question={thisQuestion} />
        <OptionsRender
          options={thisOptions}
          onPress={checkIsAnswerValid}
          disable={unActive}
          correct={correctOption}
          onOption={currentOption}
        />
      </ScrollView>
    </MainLayout>
  );
};

export default QuizPlayScreen;

const styles = StyleSheet.create({});
