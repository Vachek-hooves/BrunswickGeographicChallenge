import {useState, useEffect, createContext, useContext} from 'react';
import {APP_DATA} from '../data/appData';
import {getInitData, initData} from './asyncStorageUtils';

export const AppContext = createContext({
  normal: [],
  hard: [],
});

export const AppProvider = ({children}) => {
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

  const value = {normal, hard};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext use with App Provider');
  }
  return context;
};
