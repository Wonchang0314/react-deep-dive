let dependencies: any[] = [];
let dependencyIdx = 0;

export function useEffect(callback: Function, dependency: Array<any>): void {
  const currentIdx = dependencyIdx;
  const hasChanged =
    !dependencies[currentIdx] ||
    dependency.some((dep, i) => dep !== dependencies[currentIdx][i]);

  if (hasChanged) {
    callback();
    dependencies[currentIdx] = [...dependency];
  }
  dependencyIdx++;
}
