import {useState, useEffect, createContext, useContext} from 'react';
import {APP_DATA} from '../data/appData';
import {getInitData, initData} from './asyncStorageUtils';

export const AppContext = createContext({
  training: [],
  exploration: [],
  competition: [],
  returnQuizMode: () => {},
  activeNextLevelHandler: () => {},
});

export const AppProvider = ({children}) => {
  const [training, setTraining] = useState([]);
  const [exploration, setExploration] = useState([]);
  const [competition, setCompetition] = useState([]);

  useEffect(() => {
    startDataInit();
  }, []);

  const startDataInit = async () => {
    try {
      const [training, exploration, competition] = await Promise.all([
        getInitData('training'),
        getInitData('exploration'),
        getInitData('competition'),
      ]);
      if (training.length === 0) {
        await initData(APP_DATA, 'training');
        const level = await getInitData('training');
        setTraining(level);
      } else {
        setTraining(training);
      }

      if (exploration.length === 0) {
        await initData(APP_DATA, 'exploration');
        const level = await getInitData('exploration');
        setExploration(level);
      } else {
        setExploration(exploration);
      }

      if (competition.length === 0) {
        await initData(APP_DATA, 'competition');
        const level = await getInitData('competition');
        setCompetition(level);
      } else {
        setCompetition(competition);
      }
    } catch (error) {
      console.error('Data initialization failure', error);
    }
  };

  const returnQuizMode = mode => {
    switch (mode) {
      case 'training':
        return training;
      case 'exploration':
        return exploration;
      case 'competition':
        return competition;
      default:
        break;
    }
  };

  const activeNextLevelHandler = async (id, mode) => {
    console.log(id, mode);
    try {
      const quizData = await getInitData(`${mode}`);
      const thisQuizIndex = quizData.findIndex(quiz => quiz.id === id);
      if (thisQuizIndex !== -1) {
        const updatedQuiz = quizData.map((quiz, i) => {
          if (i === thisQuizIndex + 1) {
            return {...quiz, notActive: false};
          }
          return quiz;
        });

        console.log(updatedQuiz);
        await initData(updatedQuiz, mode);

        switch (mode) {
          case 'training':
            setTraining(updatedQuiz);
          case 'exploration':
            setExploration(updatedQuiz);
          case 'competition':
            setCompetition(updatedQuiz);
          default:
            break;
        }
      }
    } catch (error) {}
  };

  const value = {
    training,
    exploration,
    competition,
    returnQuizMode,
    activeNextLevelHandler,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext use with App Provider');
  }
  return context;
};
