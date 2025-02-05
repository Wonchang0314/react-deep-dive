import { VDom, VTextDom } from "./createElement";

export function render({ type, props, children }: VDom | VTextDom) {
  const element = document.createElement(type as keyof HTMLElementTagNameMap);

  if (props) {
    const prop = Object.entries(props);
    prop.forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function") {
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (value !== null && value !== undefined) {
        element.setAttribute(key, String(value));
      }
    });
  }

  if (children) {
    if (Array.isArray(children)) {
      children.forEach((child) => {
        element.appendChild(render(child));
      });
    } else if (type === null) {
      element.appendChild(document.createTextNode(children as string));
    }
  }

  console.log(element);
  return element;
}
