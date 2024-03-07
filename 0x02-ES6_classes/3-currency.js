export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(nm) {
    this._name = nm;
  }

  get code() {
    return this._code;
  }

  set code(cd) {
    this._code = cd;
  }

  displayFullCurrency() {
    return `${this.name}(${this.code})`;
  }
}
