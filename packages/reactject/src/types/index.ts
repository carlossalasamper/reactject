import { DependencyContainer } from "tsyringe";
import ReactjectModule from "./ReactjectModule";

export { DependencyContainer, ReactjectModule };

export interface ModuleConfig {
  hasChildContainer?: boolean;
  Submodules: typeof ReactjectModule[];
}
