import "./style.css";
import Test from "./Test";
import { createElement } from "./createElement";

document
  .querySelector("#app")!
  .appendChild(createElement(Test().type, Test().props));
