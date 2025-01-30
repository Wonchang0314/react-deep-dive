export interface NodeT {
  key?: string | null;
  props: {
    children: NodeT[] | string;
    key?: string;
  };
  type: string;
}

/*
처음에는 실제 돔을 그리는 createElement 함수를 만들어보았지만, 
React.createElement는 JSX 객체를 V-dom 객체로 변환하는 것이라고 이해했습니다.
그래서 이 함수는 단순히 객체를 생성하여 리턴하는 역할, 실질적인 렌더링은 다른 함수로 모듈화하는게 적절한 방식이라고 이해했습니다.
*/
export function createElement({ key, props, type }: NodeT) {
  return {
    key,
    props: {
      children: props.children.length === 1 ? props.children[0] : props,
    },
    type,
  };
}
