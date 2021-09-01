import { Itodo } from '../types';
import AsyncStorage from '@react-native-community/async-storage';

type StorageValue = Itodo[] | null;

export const setStorage = (key: string, value: StorageValue) => {
  AsyncStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = async (key: string) => {
  const data = JSON.parse((await AsyncStorage.getItem(key)) || '[]');

  return data.length ? data : null;
};
