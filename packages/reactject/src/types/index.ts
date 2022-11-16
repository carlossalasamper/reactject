import { DependencyContainer } from "tsyringe";
import ReactjectModule from "./ReactjectModule";

export { DependencyContainer, ReactjectModule };

export interface ModuleConfig {
  submodules?: typeof ReactjectModule[];
  hasChildContainer?: boolean;
}
