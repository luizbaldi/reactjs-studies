import AsyncStorage from '@react-native-community/async-storage';

import { Month } from './types';

const PREFIX = '@fo_';

const isValidJson = (str: string) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }

  return true;
};

export const setMonth = (key: string, value: Month) => {
  return AsyncStorage.setItem(`${PREFIX}${key}`, JSON.stringify(value));
};

export const getMonth = async (monthName: string): Promise<Month | null> => {
  const value = (await AsyncStorage.getItem(`${PREFIX}${monthName}`)) || '';

  if (isValidJson(value)) {
    const month: Month = JSON.parse(value);
    return month;
  }

  return null;
};
