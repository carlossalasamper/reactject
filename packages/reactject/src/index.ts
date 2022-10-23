import "reflect-metadata";

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
