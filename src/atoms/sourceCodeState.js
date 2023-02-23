import { atom } from "recoil";

export const sourceCodeState = atom({
  key: 'sourceCodeState',
  default: 'solution = ',
})