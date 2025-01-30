export interface Children {
  key: string | null;
  content?: string;
  type: string;
}

export interface JSXPropT {
  key: string;
  props: Children[];
  type: string;
}
export function createElement({ key, props, type }: JSXPropT) {
  const element = document.createElement(type);
  element.setAttribute("key", key);

  props.forEach((prop) => {
    const temp = document.createElement(prop.type);
    temp.setAttribute("key", key);
    temp.innerText = prop.content ? prop.content : "";
    element.appendChild(temp);
  });

  return element;
}
