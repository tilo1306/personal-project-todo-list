import AsyncStorage from '@react-native-async-storage/async-storage';

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@storage_Key');
    const result = jsonValue != null ? JSON.parse(jsonValue) : null;
    return result.includes('light');
  } catch (e) {
    // error reading value
  }
};