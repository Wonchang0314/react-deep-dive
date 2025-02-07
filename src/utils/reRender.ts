import { VDom, VTextDom } from "../utils/createElement";

let currentVDom: VDom | VTextDom | null = null;

export const saveCurrentVDom = (newVDom: VDom | VTextDom) => {
  currentVDom = newVDom;
};

export const reRender = () => {
  const root = document.querySelector("#app");
  if (!root) return;

  // 현재 VDom객체를 어디서 어떻게 관리하고,
  // reRender함수는 이런식으로 분리하는게 맞을지 여기서부터 판단이 잘 안섭니다...
};
