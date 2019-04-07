class Marchand {
  constructor(actualCorn, actualGold) {
    this.prix_ = Math.random() * 2;
    this.maxCorn_ = actualCorn + 100;
    this.maxGold_ = actualGold + 100;
    this.actualGold_ = actualGold;
    this.actualCorn_ = actualCorn;
  }

  Decrire() {
    console.log(
      `Votre marchand a ${this.actualGold_} golds et ${this.actualCorn_}` +
        `corns, il peut porter ${this.maxGold_} gold ${this.maxCorn_} corn`
    );
  }

  Echange_gold_for_corn(m) {
    const max_gold_for_exchange = Math.min(
      m.max_gold - m.actual_gold,
      m.actual_corn / 2,
      this.actual_gold_,
      (this.max_corn_ - this.actual_corn_) / 2
    );
    const gold_for_exchange = Math.floor(Math.random() * max_gold_for_exchange);
    const corn_for_exchange = 2 * gold_for_exchange;

    this.actual_corn_ += corn_for_exchange;
    this.actual_gold_ -= gold_for_exchange;
    m.actual_corn -= corn_for_exchange;
    m.actual_gold += gold_for_exchange;
    console.log(
      'Exchange gold for corn: Gold Exchanged: ' +
        gold_for_exchange +
        ' CornExchanged: ' +
        corn_for_exchange
    );
    console.log(
      'Marchand 1: Gold: ' +
        this.actual_gold_ +
        ' MaxGold: ' +
        this.max_gold_ +
        'Corn ' +
        this.actual_corn_ +
        ' Max Corn : ' +
        this.max_corn_
    );
    console.log(
      'Marchand 2: Gold: ' +
        m.actual_gold +
        ' MaxGold: ' +
        m.max_gold +
        'Corn ' +
        m.actual_corn +
        ' Max Corn : ' +
        m.max_corn
    );
  }

  Echange_corn_for_gold(m) {
    const max_corn_for_exchange = Math.min(
      this.max_corn_,
      (this.max_gold_ - this.actual_gold_) * 2,
      m.max_corn - m.actual_corn,
      m.actual_gold / 2
    );
    const corn_for_exchange = Math.floor(Math.random() * max_corn_for_exchange);
    const gold_for_exchange = corn_for_exchange / 2;

    this.actual_corn -= corn_for_exchange;
    this.actual_gold += gold_for_exchange;
    m.actual_corn += corn_for_exchange;
    m.actual_gold -= gold_for_exchange;
    console.log(
      'Exchange corn for gold: CornExchanged: ' +
        corn_for_exchange +
        ' GoldExchanged: ' +
        gold_for_exchange
    );
    console.log(
      'Marchand 1: Gold: ' +
        this.actual_gold_ +
        ' MaxGold: ' +
        this.max_gold_ +
        'Corn ' +
        this.actual_corn_ +
        ' Max Corn : ' +
        this.max_corn_
    );
    console.log(
      'Marchand 2: Gold: ' +
        m.actual_gold +
        ' MaxGold: ' +
        m.max_gold +
        'Corn ' +
        m.actual_corn +
        ' Max Corn : ' +
        m.max_corn
    );
  }

  get prix() {
    return this.prix_;
  }

  set prix(p) {
    this.prix_ = p;
  }

  get max_corn() {
    return this.max_corn_;
  }

  set max_corn(c) {
    this.max_corn_ = c;
  }

  get max_gold() {
    return this.max_gold_;
  }

  set max_gold(g) {
    this.max_gold_ = g;
  }

  get actual_gold() {
    return this.actual_gold_;
  }

  set actual_gold(ag) {
    this.actual_gold_ = ag;
  }

  get actual_corn() {
    return this.actual_corn_;
  }

  set actual_corn(ac) {
    this.actual_corn_ = ac;
  }
}

module.exports = {Marchand};
