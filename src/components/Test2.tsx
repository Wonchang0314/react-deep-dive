import { ChangeEvent } from "react";
import { createElement } from "../utils/createElement";
import { useState } from "../utils/useState";
import { useEffect } from "../utils/useEffect";

const Test2 = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    console.log("사이드 이팩트!");
  }, []);

  return (
    <div id="1">
      <h1>Hello World</h1>
      <h2>현재 카운트: {count}</h2>
      <button onClick={() => setCount(count + 1)}>카운트 업</button>
      <input onChange={handleInput} value={input}></input>
    </div>
  );
};

export default Test2;
