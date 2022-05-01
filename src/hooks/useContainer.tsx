import { container, InjectionToken } from "tsyringe";

const useResolve = <T,>(token: InjectionToken<T>) => {
  return container.resolve<T>(token);
};

export default useResolve;
