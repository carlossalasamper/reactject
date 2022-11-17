import { ModuleConfig, ReactjectModule } from "../types";

export default function module(config: Partial<ModuleConfig> = {}) {
  return (constructor: typeof ReactjectModule) => {
    return class extends constructor {
      config: ModuleConfig = {
        submodules: config.submodules || [],
        container: config.container || "app",
      };
    };
  };
}
