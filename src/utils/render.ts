import { VDom, VTextDom } from "./createElement";

export function render(vdom: VDom | VTextDom, container: Element) {
  if (vdom.type === "text") {
    const textNode = document.createTextNode(vdom.children);
    container.appendChild(textNode);
    return;
  }

  const element = document.createElement(vdom.type);

  if (vdom.props) {
    Object.entries(vdom.props).forEach(([key, value]) => {
      if (key.startsWith("on") && typeof value === "function") {
        element.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (key !== "children" && value !== null && value !== undefined) {
        element.setAttribute(key, String(value));
      }
    });
  }

  vdom.children.forEach((child) => render(child, element));

  container.appendChild(element);
}
