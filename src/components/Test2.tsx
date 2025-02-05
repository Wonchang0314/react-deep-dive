import { createElement } from "../utils/createElement";

const Test2 = () => {
  return (
    <div id="1" onClick={() => console.log(1)}>
      <h1>Hello</h1>
      React
      <p>World</p>
    </div>
  );
};

export default Test2;
