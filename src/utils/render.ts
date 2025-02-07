import { VDom, VTextDom } from "./createElement";

export function render({ type, props, children }: VDom | VTextDom) {
  if (type === "text") {
    return document.createTextNode(children);
  }
  const element = document.createElement(type);

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
    } else {
      element.appendChild(document.createTextNode(children as string));
    }
  }

  return element;
}
