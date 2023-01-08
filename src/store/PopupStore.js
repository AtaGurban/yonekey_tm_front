import { makeAutoObservable } from "mobx";

export class PopupStore {
  constructor() {
    this._visible = false;
    this._start = false;
    this._timer = 0;
    makeAutoObservable(this);
  }

  setVisible(bool) {
    this._visible = bool;
  }

  setStart(bool) {
    this._start = bool;
  }

  setTimer(num) {
    this._timer = num;
  }

  get visible() {
    return this._visible;
  }

  get timer() {
    return this._timer;
  }

  get start() {
    return this._start;
  }
}
