import { NodeT } from "./create";

/* 인풋으로 받는 노드가 자식을 여러개 가지고 있을 경우(단일 html element가 아닌 경우, 배열), 
재귀적으로 타고 들어가면서 html요소안에 추가해주는식으로 들어가야할 것 같다고 생각했습니다
만약 하나만 있다면 그냥 해당 요소안에 테스트만 추가해주고 끝
*/
export function render(node: NodeT): HTMLElement {
  const element = document.createElement(node.type) as HTMLElement;

  if (node.key) {
    element.setAttribute("key", node.key);
  }

  if (Array.isArray(node.props.children)) {
    node.props.children.forEach((e) => {
      element.appendChild(render(e));
    });
  } else if (typeof node.props.children === "string") {
    element.innerText = node.props.children;
  }
  return element;
}
