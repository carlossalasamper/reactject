import { DependencyContainer } from "tsyringe";
import InstantiableModule from "./InstantiableModule";

export default abstract class ReactjectModule {
  public children: ReactjectModule[] = [];

  constructor(children: InstantiableModule[]) {
    children.forEach((child) => {
      this.children.push(new child());
    });
  }

  public register(container: DependencyContainer) {
    this.children.forEach((child) => {
      child.register(container);
    });
  }
}
