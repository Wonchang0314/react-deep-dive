export interface VDom {
  type: keyof HTMLElementTagNameMap | null;
  props: Record<string, any>;
  children: (VDom | VTextDom)[];
}

export interface VTextDom {
  type: null;
  props: null;
  children: string;
}

export function createElement(
  type: keyof HTMLElementTagNameMap | null,
  props: Record<string, any> | null,
  ...children: (VDom | VTextDom | string)[]
): VDom | VTextDom {
  const flattenedChildren = children
    .flat(Infinity)
    .map((child) =>
      typeof child === "string"
        ? { type: null, props: null, children: child }
        : child
    );

  return {
    type,
    props: props || {},
    children: flattenedChildren,
  };
}
