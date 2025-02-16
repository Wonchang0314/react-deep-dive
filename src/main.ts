import "./style.css";
import { createElement } from "./utils/createElement";
import Test2 from "./components/Test2";
import { render } from "./utils/render";
import { setRerenderFunction } from "./utils/useState";
import { diff } from "./utils/diff";

const root = document.querySelector("#app")!;
const appElement = createElement(Test2().type, Test2().props, Test2().children);

function reRender() {
  const root = document.querySelector("#app")!;
  root.innerHTML = "";
  const newElement = createElement(
    Test2().type,
    Test2().props,
    Test2().children
  );
  const updated = diff(appElement, newElement);
  render(updated, root);
}
setRerenderFunction(reRender);

render(appElement, root);
