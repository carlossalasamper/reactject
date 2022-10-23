import { useMemo } from "react";
import { container, InjectionToken } from "tsyringe";

const useResolve = <T>(token: InjectionToken<T>) => {
  return useMemo(() => container.resolve<T>(token), [token]);
};

export default useResolve;
