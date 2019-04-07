class Marchand {
  constructor(actualCorn, actualGold) {
    this.prix_ = Math.random() * 2;
    this.maxCorn_ = actualCorn + 100;
    this.maxGold_ = actualGold + 100;
    this.actualGold_ = actualGold;
    this.actualCorn_ = actualCorn;
  }

  decrire() {
    console.log(
      `Votre marchand a ${this.actualGold_} golds et ${this.actualCorn_}` +
        `corns, il peut porter ${this.maxGold_} gold ${this.maxCorn_} corn`
    );
  }

  echangeGoldForCorn(m) {
    const maxGoldForExchange = Math.min(
      m.maxGold - m.actualGold,
      m.actualCorn / 2,
      this.actualGold_,
      (this.maxCorn_ - this.actualCorn_) / 2
    );
    const goldForExchange = Math.floor(Math.random() * maxGoldForExchange);
    const cornForExchange = 2 * goldForExchange;

    this.actualCorn_ += cornForExchange;
    this.actualGold_ -= goldForExchange;
    m.actualCorn -= cornForExchange;
    m.actualGold += goldForExchange;
    console.log(
      'Exchange gold for corn: Gold Exchanged: ' +
        goldForExchange +
        ' CornExchanged: ' +
        cornForExchange
    );
    console.log(
      'Marchand 1: Gold: ' +
        this.actualGold_ +
        ' MaxGold: ' +
        this.maxGold_ +
        'Corn ' +
        this.actualCorn_ +
        ' Max Corn : ' +
        this.maxCorn_
    );
    console.log(
      'Marchand 2: Gold: ' +
        m.actualGold +
        ' MaxGold: ' +
        m.maxGold +
        'Corn ' +
        m.actualCorn +
        ' Max Corn : ' +
        m.maxCorn
    );
  }

  echangeCornForGold(m) {
    const maxCornForExchange = Math.min(
      this.maxCorn_,
      (this.maxGold_ - this.actualGold_) * 2,
      m.maxCorn - m.actualCorn,
      m.actualGold / 2
    );
    const cornForExchange = Math.floor(Math.random() * maxCornForExchange);
    const goldForExchange = cornForExchange / 2;

    this.actualCorn_ -= cornForExchange;
    this.actualGold_ += goldForExchange;
    m.actualCorn += cornForExchange;
    m.actualGold -= goldForExchange;
    console.log(
      'Exchange corn for gold: CornExchanged: ' +
        cornForExchange +
        ' GoldExchanged: ' +
        goldForExchange
    );
    console.log(
      'Marchand 1: Gold: ' +
        this.actualGold_ +
        ' MaxGold: ' +
        this.maxGold_ +
        'Corn ' +
        this.actualCorn_ +
        ' Max Corn : ' +
        this.maxCorn_
    );
    console.log(
      'Marchand 2: Gold: ' +
        m.actualGold +
        ' MaxGold: ' +
        m.maxGold +
        'Corn ' +
        m.actualCorn +
        ' Max Corn : ' +
        m.maxCorn
    );
  }

  get prix() {
    return this.prix_;
  }

  set prix(v) {
    this.prix_ = v;
  }

  get maxCorn() {
    return this.maxCorn_;
  }

  set maxCorn(v) {
    this.maxCorn_ = v;
  }

  get maxGold() {
    return this.maxGold_;
  }

  set maxGold(v) {
    this.maxGold_ = v;
  }

  get actualGold() {
    return this.actualGold_;
  }

  set actualGold(v) {
    this.actualGold_ = v;
  }

  get actualCorn() {
    return this.actualCorn_;
  }

  set actualCorn(v) {
    this.actualCorn_ = v;
  }
}

module.exports = {Marchand};
