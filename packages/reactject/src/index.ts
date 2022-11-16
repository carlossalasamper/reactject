import "reflect-metadata";
import { container } from "tsyringe";
import InstantiableModule from "./types/InstantiableModule";

export const Reactject = {
  start: (RootModule: InstantiableModule) => {
    const rootModule = new RootModule();

    rootModule.register(container);
  },
};

export {
  injectable,
  singleton,
  autoInjectable,
  inject,
  injectAll,
  injectWithTransform,
  injectAllWithTransform,
  container,
  registry,
} from "tsyringe";
export * from "./hooks";
export * from "./types";
