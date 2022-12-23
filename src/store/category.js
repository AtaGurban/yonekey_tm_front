import { makeAutoObservable } from "mobx";

export class CategoryStore {
  constructor() {
    this._titleCategory = [];
    this._category = [];
    makeAutoObservable(this);
  }

  setTitleCategory(titleCategory) {
    this._titleCategory = titleCategory;
  }

  setCategory(category) {
    this._category = category;
  }

  get titleCategory() {
    return this._titleCategory;
  }

  get category() {
    return this._category;
  }
}
