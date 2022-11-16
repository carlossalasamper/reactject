import { ReactjectModule } from "../types";
import InstantiableModule from "../types/InstantiableModule";

export default function module(ChildrenModules: InstantiableModule[]) {
  return (constructor: typeof ReactjectModule) => {
    return class extends constructor {
      constructor() {
        super(ChildrenModules);
      }
    };
  };
}
