import AsyncStorage from '@react-native-async-storage/async-storage';

export const initData = async (data, level) => {
  try {
    await AsyncStorage.setItem(level, JSON.stringify(data));
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getInitData = async level => {
  try {
    const savedData = await AsyncStorage.getItem(level);
    return savedData !== null ? JSON.parse(savedData) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
