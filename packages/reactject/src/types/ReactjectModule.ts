import { DependencyContainer } from "tsyringe";

export default abstract class ReactjectModule {
  protected children: ReactjectModule[];

  constructor(children: ReactjectModule[]) {
    this.children = children;
  }

  public register(container: DependencyContainer) {
    this.children.forEach((child) => {
      child.register(container);
    });
  }
}
