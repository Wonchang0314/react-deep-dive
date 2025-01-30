import "./style.css";
import { createElement, JSXPropT } from "./create";

const children = {
  key: "2",
  content: "Hello, React Clone!",
  type: "h1",
};

const element: JSXPropT = {
  key: "1",
  props: [children],
  type: "div",
};

const testElement = createElement(element);
console.log(testElement.outerHTML);

document.querySelector<HTMLDivElement>("#app")!;
