import { useMemo, DependencyList } from "react";
import { container, InjectionToken } from "tsyringe";

const useResolve = <T>(token: InjectionToken<T>, deps: DependencyList = []) => {
  const dependency = useMemo(() => container.resolve<T>(token), deps);
  return dependency;
};

export default useResolve;
