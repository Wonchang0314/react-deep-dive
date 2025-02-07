import { reRender } from "./reRender";

// 리액트 딥다이브 책을 보니 상태값들을 전역으로 배열의 형태로 관리하는것 같아 이런식으로 해보았습니다.
let states: any[] = [];
let index = 0;

export const useState = (initValue: any) => {
  const currentState = states[index] || initValue;
  states[index] = currentState;

  const setState = function () {
    let currentIdx = index;
    return function (newValue: any) {
      states[currentIdx] = newValue;
      reRender();
    };
  };

  index += 1;

  return [currentState, setState];
};
