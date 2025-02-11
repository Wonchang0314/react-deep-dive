import { createElement } from "../utils/createElement";
import { useState } from "../utils/useState";

const Test2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div id="1">
      <h1>Hello World</h1>
      <h2>현재 카운트: {count}</h2>
      <button onClick={() => setCount(count + 1)}>카운트 업</button>
    </div>
  );
};

export default Test2;
