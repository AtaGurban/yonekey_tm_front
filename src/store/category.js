import { makeAutoObservable } from "mobx";

export class CategoryStore {
  constructor() {
    this._titleCategory = [];
    makeAutoObservable(this);
  }


  setTitleCategory(titleCategory) {
    this._titleCategory = titleCategory;
  }


  get titleCategory() {
    return this._titleCategory;
  }
}
