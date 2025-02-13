import { VDom, VTextDom } from "./createElement";
import { SyntheticEvent } from "./syntheticEvent";

const eventRegistry: Map<EventTarget, any> = new Map();

function handleEvent(event: Event) {
  const syntheticEvent = new SyntheticEvent(event);
  let currentT: EventTarget | null = event.target;

  while (currentT) {
    const eventHandlers = eventRegistry.get(currentT);
    if (eventHandlers && eventHandlers[event.type]) {
      eventHandlers[event.type](event);
      if (!syntheticEvent.isPropagationStopped) break;
    }
    currentT = (currentT as HTMLElement).parentElement;
  }
}
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
        const eventType = key.slice(2).toLowerCase();
        if (!eventRegistry.has(element)) {
          eventRegistry.set(element, {});
        }
        eventRegistry.get(element)[eventType] = value;
        container.addEventListener(eventType, handleEvent);
        //element.addEventListener(key.slice(2).toLowerCase(), value);
      } else if (key !== "children" && value !== null && value !== undefined) {
        element.setAttribute(key, String(value));
      }
    });
  }

  vdom.children.forEach((child) => render(child, element));

  container.appendChild(element);
}
