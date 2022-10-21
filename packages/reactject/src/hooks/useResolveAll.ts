import { useMemo, DependencyList } from "react";
import { container, InjectionToken } from "tsyringe";

const useResolveAll = <T>(
  token: InjectionToken<T>,
  deps: DependencyList = []
) => {
  const dependencies = useMemo(() => container.resolveAll<T>(token), deps);
  return dependencies;
};

export default useResolveAll;
