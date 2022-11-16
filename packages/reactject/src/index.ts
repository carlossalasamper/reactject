import "reflect-metadata";
import { container } from "tsyringe";
import { ReactjectModule } from "./types";

export const Reactject = {
  start: (RootModule: typeof ReactjectModule) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rootModule = new RootModule();

    rootModule.start();
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
export * from "./decorators";
