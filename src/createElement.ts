export interface VDom {
  type: string;
  props: Record<string, any>;
  children: VDom | string;
}

export function createElement(
  type: string,
  props: Record<string, any> | null,
  children: VDom | string
): VDom {
  return {
    type,
    props: {
      ...props,
    },
    children: children,
  };
}
