import { DependencyContainer } from "tsyringe";
import { ModuleConfig } from ".";

export default class ReactjectModule {
  public readonly config!: ModuleConfig;
  public readonly submodules: ReactjectModule[] = [];
  public container!: DependencyContainer;

  start() {
    this.config.Submodules.forEach((Submodule) => {
      this.submodules.push(new Submodule());
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
