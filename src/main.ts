import "./style.css";
import { createElement } from "./utils/createElement";
import Test2 from "./components/Test2";
import { render } from "./utils/render";

document
  .querySelector("#app")!
  .appendChild(
    render(createElement(Test2().type, Test2().props, Test2().children))
  );
