import { DependencyContainer } from "tsyringe";
import { ModuleConfig } from ".";

export default class ReactjectModule {
  public readonly config!: ModuleConfig;
  public readonly submodules: ReactjectModule[] = [];
  public container!: DependencyContainer;

  start() {
    this.config.submodules?.forEach((submodule) => {
      this.submodules.push(new submodule());
    });
  }

  public register(container: DependencyContainer) {
    this.container = container;

    this.submodules.forEach((child) => {
      child.register(
        this.config.hasChildContainer
          ? container.createChildContainer()
          : container
      );
    });
  }
}
