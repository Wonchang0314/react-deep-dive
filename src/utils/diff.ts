import { VDom, VTextDom } from "./createElement";

// diff함수를 통해서 이전객체와 달라진점이 있는지 비교하고, 있다면 달라진 객체를 반환하도록 해야하는것 같은데...
// 이후부터는 잘 모르겠습니다
export const diff = (
  oldVDom: VDom | VTextDom,
  newVDom: VDom | VTextDom
): VDom | VTextDom => {
  // 텍스트 노드 변경 감지
  if (oldVDom.type === "text" || newVDom.type === "text") {
    if (oldVDom.children !== newVDom.children) return newVDom;
    return oldVDom;
  }

  // 타입이 다르면 전체 교체
  if (oldVDom.type !== newVDom.type) return newVDom;

  // 속성 비교
  const updatedProps: Record<string, any> = {};
  for (const key in newVDom.props) {
    if (oldVDom.props[key] !== newVDom.props[key]) {
      updatedProps[key] = newVDom.props[key];
    }
  }
  for (const key in oldVDom.props) {
    if (!(key in newVDom.props)) {
      updatedProps[key] = null;
    }
  }

  const hasPropsChanged = Object.keys(updatedProps).length > 0;

  // 자식 노드 비교
  const updatedChildren = oldVDom.children.map((oldChild, i) =>
    diff(oldChild, newVDom.children[i])
  );
  const hasChildrenChanged = updatedChildren.some(
    (child, i) => child !== oldVDom.children[i]
  );

  // 변경 사항이 있으면 새로운 VDom 반환
  if (hasPropsChanged || hasChildrenChanged) {
    return {
      type: newVDom.type,
      props: { ...oldVDom.props, ...updatedProps },
      children: updatedChildren,
    };
  }

  return oldVDom;
};
