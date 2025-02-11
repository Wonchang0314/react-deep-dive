import "./style.css";
import { createElement } from "./utils/createElement";
import Test2 from "./components/Test2";
import { render } from "./utils/render";
import { setRerenderFunction } from "./utils/useState";

const root = document.querySelector("#app")!;
const appElement = createElement(Test2().type, Test2().props, Test2().children);

function reRender() {
  const root = document.querySelector("#app")!;
  root.innerHTML = "";
  const appElement = createElement(
    Test2().type,
    Test2().props,
    Test2().children
  );
  render(appElement, root);
}
setRerenderFunction(reRender);

render(appElement, root);
