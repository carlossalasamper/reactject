import {
  configureStore,
  ConfigureStoreOptions,
  EnhancedStore,
} from "@reduxjs/toolkit";

export default abstract class BaseReduxToolkitStore {
  private readonly _store: EnhancedStore;

  constructor(options: ConfigureStoreOptions) {
    this._store = configureStore(options);
  }

  public get store() {
    return this._store;
  }
}
