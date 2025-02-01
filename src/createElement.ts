export function createElement(
  type: string,
  props: Record<string, any> | null,
  key?: string
) {
  const element = document.createElement(type);
  if (key) element.setAttribute("key", key);

  if (props) {
    Object.entries(props).forEach(([k, v]) => {
      if (k === "children") {
        if (typeof v === "string") {
          element.appendChild(document.createTextNode(v));
        } else element.appendChild(createElement(v.type, v.props));
      }
    });
  }

  return element;
}
