export interface VDom {
  type: keyof HTMLElementTagNameMap;
  props: Record<string, any>;
  children: (VDom | VTextDom)[];
}

export interface VTextDom {
  type: "text";
  props: null;
  children: string;
}

export function createElement(
  type: keyof HTMLElementTagNameMap,
  props: Record<string, any> | null,
  ...children: (VDom | VTextDom | string | number)[]
): VDom | VTextDom {
  const flattenedChildren: (VDom | VTextDom)[] = children
    .flat(Infinity)
    .map((child) =>
      typeof child === "string" || typeof child === "number"
        ? { type: "text", props: null, children: String(child) }
        : child
    );

  return {
    type,
    props: props || {},
    children: flattenedChildren,
  };
}
