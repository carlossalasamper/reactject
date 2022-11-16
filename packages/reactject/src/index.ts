import "reflect-metadata";
import { container } from "tsyringe";
import ReactjectModule from "./types/ReactjectModule";

export const Reactject = {
  start: (rootModule: ReactjectModule) => {
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
