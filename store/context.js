import {useState, useEffect, createContext, useContext} from 'react';
import {APP_DATA} from '../data/appData';

export const AppContext = () => {};

export const AppProvider = ({children}) => {
  const value = {};
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
