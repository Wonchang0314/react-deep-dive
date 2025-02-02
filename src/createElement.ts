export interface VDom {
  type: string;
  props: Record<string, any>;
  key?: string;
}

export function createElement(
  type: string,
  props: Record<string, any> | null,
  key?: string
): VDom {
  const children = props?.children
    ? Array.isArray(props.children)
      ? props.children
      : [props.children]
    : [];
  return {
    type,
    props: {
      children: children.length > 1 ? children : children[0],
    },
    key,
  };
}
