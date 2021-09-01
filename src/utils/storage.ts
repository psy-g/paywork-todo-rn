import { Itodo } from '../types';
import AsyncStorage from '@react-native-community/async-storage';

type StorageValue = Itodo[] | null;

// AsyncSotrage입니다.
// 리덕스 구축 전에 사용하였습니다.

// 스토리지 저장
export const setStorage = (key: string, value: StorageValue) => {
  AsyncStorage.setItem(key, JSON.stringify(value));
};

// 스토리지 출력
export const getStorage = async (key: string) => {
  const data = JSON.parse((await AsyncStorage.getItem(key)) || '[]');

  return data.length ? data : null;
};
