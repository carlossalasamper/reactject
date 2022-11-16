import { ModuleConfig, ReactjectModule } from "../types";

export default function module(config: ModuleConfig) {
  return (constructor: typeof ReactjectModule) => {
    return class extends constructor {
      config = config;
    };
  };
}
