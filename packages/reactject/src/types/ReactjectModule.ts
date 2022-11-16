import { DependencyContainer } from "tsyringe";

export default class ReactjectModule {
  public ChildrenModules!: typeof ReactjectModule[];
  public children: ReactjectModule[] = [];

  start() {
    this.ChildrenModules.forEach((ChildrenModule) => {
      this.children.push(new ChildrenModule());
    });
  }

  public register(container: DependencyContainer) {
    this.children.forEach((child) => {
      child.register(container);
    });
  }
}
