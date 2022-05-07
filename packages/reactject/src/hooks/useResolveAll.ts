import { container, InjectionToken } from "tsyringe";

const useResolveAll = <T,>(token: InjectionToken<T>) => {
  return container.resolveAll<T>(token);
};

export default useResolveAll;
