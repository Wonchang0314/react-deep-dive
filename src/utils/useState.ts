let states: any[] = [];
let stateIndex = 0;
let rerenderFunction: Function;

export function setRerenderFunction(fn: Function) {
  rerenderFunction = fn;
}

export function useState(initialValue: any, rerender?: Function) {
  const currentIndex = stateIndex;
  states[currentIndex] = states[currentIndex] ?? initialValue;
  stateIndex++;

  rerenderFunction = rerenderFunction
    ? rerenderFunction
    : rerender
    ? rerender
    : function () {};

  function setState(newValue: any) {
    if (typeof newValue === "function") {
      states[currentIndex] = newValue(states[currentIndex]);
    } else {
      states[currentIndex] = newValue;
    }
    stateIndex = 0;
    rerenderFunction();
  }

  return [states[currentIndex], setState];
}
