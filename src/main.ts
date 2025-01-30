import "./style.css";
import { createElement, NodeT } from "./create";
import { render } from "./render";

const children: NodeT = {
  key: "2",
  props: {
    children: "Hello, React Clone",
  },
  type: "h1",
};

const element: NodeT = {
  key: "1",
  props: {
    children: [children],
  },
  type: "div",
};

console.log(JSON.stringify(createElement(element)));
document.querySelector<HTMLDivElement>("#app")!.appendChild(render(element));
