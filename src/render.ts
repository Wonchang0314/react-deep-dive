import { VDom } from "./createElement";

export function render({ type, props, key }: VDom) {
  const element = document.createElement(type);
  if (key) element.setAttribute("key", key);

  if (props) {
    Object.entries(props).forEach(([k, v]) => {
      if (k === "children") {
        if (typeof v === "string") {
          element.appendChild(document.createTextNode(v));
        } else {
          const temp: VDom = { type: v.type, props: v.props };
          element.appendChild(render(temp));
        }
      }
    });
  }

  return element;
}
