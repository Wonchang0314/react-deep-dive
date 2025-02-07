import "./style.css";
import { createElement, VDom, VTextDom } from "./utils/createElement";
import Test2 from "./components/Test2";
import { render } from "./utils/render";
import { saveCurrentVDom } from "./utils/reRender";

let currentVDom: VDom | VTextDom = createElement(
  Test2().type,
  Test2().props,
  Test2().children
);
saveCurrentVDom(currentVDom);

document.querySelector("#app")!.appendChild(render(currentVDom));
