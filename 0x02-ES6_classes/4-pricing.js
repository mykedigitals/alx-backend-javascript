export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(amt) {
    this._amount = amt;
  }

  get currency() {
    return this._currency;
  }

  set currency(cry) {
    this._currency = cry;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
