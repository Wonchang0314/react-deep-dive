import { VDom } from "./createElement";

export function render({ type, props, children }: VDom) {
  const element = document.createElement(type);

  if (props) {
    const prop = Object.entries(props);
    prop.forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  }

  if (children) {
    if (typeof children === "string") {
      element.appendChild(document.createTextNode(children));
    } else {
      element.appendChild(render(children));
    }
  }

  return element;
}
