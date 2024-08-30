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

  const initializeModeData = async (mode, setMode) => {
    try {
      let data = await getInitData(mode);
      if (data.length === 0) {
        await initData(APP_DATA, mode);
        data = await getInitData(mode);
      }
      setMode(data);
    } catch (error) {
      console.error(`Failed to initialize data for  ${mode}`, error);
    }
  };

  const startDataInit = async () => {
    await Promise.all([
      initializeModeData('training', setTraining),
      initializeModeData('exploration', setExploration),
      initializeModeData('competition', setCompetition),
    ]);
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
        return [];
    }
  };

  const activeNextLevelHandler = async (id, mode) => {
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
        await initData(updatedQuiz, mode);
        switch (mode) {
          case 'training':
            setTraining(updatedQuiz);
            break;
          case 'exploration':
            setExploration(updatedQuiz);
            break;
          case 'competition':
            setCompetition(updatedQuiz);
            break;
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
