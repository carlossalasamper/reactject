import { ReactjectModule } from "../types";

export default function module(ChildrenModules: typeof ReactjectModule[]) {
  return (constructor: typeof ReactjectModule) => {
    return class extends constructor {
      ChildrenModules = ChildrenModules;
    };
  };
}
