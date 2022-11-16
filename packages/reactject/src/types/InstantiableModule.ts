import ReactjectModule from "./ReactjectModule";

type InstantiableModule = {
  new (): ReactjectModule;
};

export default InstantiableModule;
