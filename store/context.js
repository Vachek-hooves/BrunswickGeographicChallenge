import {useState, useEffect, createContext, useContext} from 'react';
import {APP_DATA} from '../data/appData';
import {getInitData, initData} from './asyncStorageUtils';

export const AppContext = createContext({
  normal: [],
  hard: [],
  training: [],
  exploration: [],
  competition: [],
  returnQuizMode: () => {},
});

export const AppProvider = ({children}) => {
  const [training, setTraining] = useState([]);
  const [exploration, setExploration] = useState([]);
  const [competition, setCompetition] = useState([]);

  const [normal, setNormal] = useState([]);
  const [hard, setHard] = useState([]);

  useEffect(() => {
    startDataInit();
  }, []);

  const startDataInit = async () => {
    try {
      const [normalData, hardData] = await Promise.all([
        getInitData('normal'),
        getInitData('hard'),
      ]);
      const [training, exploration, competition] = await Promise.all([
        getInitData('training'),
        getInitData('exploration'),
        getInitData('competition'),
      ]);
      if (training.length === 0) {
        await initData(APP_DATA, 'training');
        const level = await getInitData('training');
        setTraining(level);
      }
      setTraining(training);

      if (exploration.length === 0) {
        await initData(APP_DATA, 'exploration');
        const level = await getInitData('exploration');
        setExploration(level);
      }
      setExploration(exploration);

      if (competition.length === 0) {
        await initData(APP_DATA, 'competition');
        const level = await getInitData('competition');
        setCompetition(level);
      }
      setCompetition(competition);

      if (normalData.length === 0) {
        await initData(APP_DATA, 'normal');
        const level = await getInitData('normal');
        setNormal(level);
      }
      setNormal(normalData);

      if (hardData.length === 0) {
        await initData(APP_DATA, 'hard');
        const level = await getInitData('hard');
        setHard(level);
      }
      setHard(hardData);
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

  const value = {training, exploration, competition, returnQuizMode};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext use with App Provider');
  }
  return context;
};
