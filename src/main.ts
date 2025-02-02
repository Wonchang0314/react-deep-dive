import "./style.css";
import Test from "./Test";
import { createElement } from "./createElement";
import { render } from "./render";

document
  .querySelector("#app")!
  .appendChild(render(createElement(Test().type, Test().props)));
