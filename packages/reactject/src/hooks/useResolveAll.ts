import { useMemo } from "react";
import { container, InjectionToken } from "tsyringe";

const useResolveAll = <T>(token: InjectionToken<T>) => {
  return useMemo(() => container.resolveAll<T>(token), [token]);
};

export default useResolveAll;
