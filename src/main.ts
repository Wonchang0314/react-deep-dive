import "./style.css";
import { createElement } from "./createElement";
import Test from "./Test";
import { render } from "./render";

document
  .querySelector("#app")!
  .appendChild(
    render(createElement(Test().type, Test().props, Test().children))
  );
