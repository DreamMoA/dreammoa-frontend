import { atom } from 'recoil';

export const starState = atom({
  key: 'starState',
  default: false
});

export const autoFallingState = atom({
  key: 'autoFallingState',
  default: true
});