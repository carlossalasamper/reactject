import { createSlice, CreateSliceOptions, Slice } from "@reduxjs/toolkit";

export default abstract class BaseReduxToolkitSlice<StateType> {
  private readonly slice: Slice<StateType>;

  constructor(options: CreateSliceOptions<StateType>) {
    this.slice = createSlice(options);
  }

  public get reducer() {
    return this.slice.reducer;
  }

  public get actions() {
    return this.slice.actions;
  }
}
