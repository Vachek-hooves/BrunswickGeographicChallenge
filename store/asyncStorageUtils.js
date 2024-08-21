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

// UserScreen async function

export const saveUser = async userData => {
  try {
    await AsyncStorage.setItem('profile', JSON.stringify(userData));
  } catch (error) {
    console.error('pfofile save failed:', error);
  }
};

export const fetchUser = async () => {
  try {
    const user = await AsyncStorage.getItem('profile');
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('profile get failed:', error);
  }
};
export const updateUser = async (key, value) => {
  try {
    const user = await fetchUser();
    if (user) {
      user[key] = value;
      await AsyncStorage.setItem('profile', JSON.stringify(user));
    }
  } catch (error) {
    console.error(`profile update failed ${key}:`, error);
  }
};
