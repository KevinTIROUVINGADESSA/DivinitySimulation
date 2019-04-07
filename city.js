const {Divinity} = require('./divinity');
const {Population} = require('./population');

class City {
  constructor(name, divinityName) {
    this.name_ = name || 'UNKCITY';
    this.divinity_ = new Divinity(divinityName);
    this.population_ = new Population(
      Math.floor(1 + Math.random() * 4),
      Math.floor(1 + Math.random() * 4)
    );
    this.corn_ = 1000;
    this.gold_ = 1000;
    this.init();
  }

  init() {
    this.divinity.init();
    this.divinity.worldEvents.on('favor', shit => this.getShit(shit));
    this.divinity.worldEvents.on('blessing', shit => this.getShit(shit));
  }

  getShit(s) {
    this.corn_ += Math.floor(s.corn);
    this.gold_ += Math.floor(s.gold);
  }

  giveShit() {
    this.divinity.offeringCorn(this.corn_ / 2);
    this.divinity.offeringGold(this.gold_ / 2);
    this.corn_ /= 2;
    this.gold_ /= 2;
  }

  fight(C2) {
    let max =
      this.population_.nbGuerrier_ > C2.population.nbGuerrier
        ? C2.population.nbGuerrier
        : this.population_.nbGuerrier_;
    let i;
    let winThis = 0;
    let winOther = 0;
    if (Math.random() <= 0.4999) {
      for (i = 0; i < max; i++) {
        this.population_.guerriers_[i].attack(C2.population.guerriers[i]);
        if (!this.population_.guerriers_[i].estVivant()) {
          console.log('Che ton soldat est mort comme une merde');
          this.population_.nbGuerrier_ -= 1;
          this.population_.guerriers_.splice(i, i);
          max =
            this.population_.nbGuerrier_ > C2.population.nbGuerrier
              ? C2.population.nbGuerrier
              : this.population_.nbGuerrier_;
          console.log(max);
          winOther++;
        }

        if (!C2.population.guerriers[i].estVivant()) {
          console.log('Votre guerrier a ete sauve par ' + C2.divinity.name);
          C2.population.guerriers[i].pv = 1;
          winThis++;
        }
      }
    } else {
      for (i = 0; i < max; i++) {
        console.log(i);
        C2.population.guerriers[i].attack(this.population_.guerriers_[i]);
        if (!C2.population.guerriers[i].estVivant()) {
          console.log('Che ton soldat est mort comme une merde');
          C2.population.nbGuerrier -= 1;
          C2.population.guerriers.splice(i, i);
          max =
            this.population_.nbGuerrier_ > C2.population.nbGuerrier
              ? C2.population.nbGuerrier
              : this.population_.nbGuerrier_;
          console.log(max);
          winThis++;
        }

        if (!this.population_.guerriers_[i].estVivant()) {
          console.log('Votre guerrier a ete sauve par ' + this.divinity_.name_);
          this.population_.guerriers_[i].pv = 1;
          winOther++;
        }
      }
    }

    if (winThis > winOther) {
      console.log(
        'City: ' +
          this.name_ +
          ' is the winner WoooohWoooh ! DaTaGueule ' +
          C2.name +
          ' !'
      );
      this.gold_ += C2.gold / 2;
      this.corn_ += C2.corn / 2;
      C2.gold /= 2;
      C2.corn /= 2;
    } else if (winThis === winOther) {
      console.log('MAAAAAAAAAAAAAAAAAAAATCH NUL ! DMG IL VA RIEN SE PASSER !');
    } else {
      console.log(
        'City: ' +
          C2.name +
          ' is the winner WoooohWoooh ! DaTaGueule ' +
          this.name_ +
          ' !'
      );
      C2.gold += this.gold_ / 2;
      C2.corn += this.corn_ / 2;
      this.gold_ /= 2;
      this.corn_ /= 2;
    }
  }

  isAlive() {
    if (
      this.corn_ <= 0 ||
      this.gold_ <= 0 ||
      this.population_.nbMarchand_ === 0 ||
      this.population_.nbGuerrier_ === 0
    ) {
      return false;
    }

    return true;
  }

  trade(C2) {
    let max =
      this.population_.nbMarchand_ > C2.population.nbMarchand
        ? C2.population.nbMarchand
        : this.population_.nbMarchand_;
    let i;
    if (Math.random() <= 0.4999) {
      for (i = 0; i < max; i++) {
        if (Math.random() < 0.08) {
          console.log(
            'Votre marchand marchand a ete attaque par de vilains, super pas gentils brigands' +
              '(Pas d echange il est die mamene)!'
          );
          this.population_.nbMarchand_ -= 1;
          this.population_.marchands_.splice(i, i);
          max =
            this.population_.nbMarchand_ > C2.population.nbMarchand
              ? C2.population.nbMarchand
              : this.population_.nbMarchand_;
        } else {
          this.population_.marchands_[i].echangeGoldForCorn(
            C2.population.marchands[i]
          );
          this.gold_ = Math.floor(
            this.population_.marchands_[i].actualGold_ / 2
          );
          this.corn_ = Math.floor(
            this.population_.marchands_[i].actualCorn_ / 2
          );
        }
      }
    } else {
      for (i = 0; i < max; i++) {
        if (Math.random() < 0.08) {
          console.log(
            'Votre marchand marchand a ete attaque par de vilains, super pas gentils brigands' +
              '(Pas d echange il est die mamene)!'
          );
          C2.population.nbMarchand -= 1;
          C2.population.marchands.splice(i, i);
          max =
            this.population_.nbMarchand_ > C2.population.nbMarchand
              ? C2.population.nbMarchand
              : this.population_.nbMarchand_;
        } else {
          this.population_.marchands_[i].echangeCornForGold(
            C2.population.marchands[i]
          );
          this.gold_ = Math.floor(
            this.population_.marchands_[i].actualGold / 2
          );
          this.corn_ = Math.floor(
            this.population_.marchands_[i].actualCorn / 2
          );
        }
      }
    }
  }

  countTroupes() {
    let i;
    let rez = 0;
    for (i = 0; i < this.population_.nbGuerrier_; i++) {
      rez += this.population_.guerriers_[i].prix;
    }

    for (i = 0; i < this.population_.nbMarchand_; i++) {
      rez += this.population_.marchands_[i].prix;
    }

    this.corn_ = this.corn_ - rez * 2 > 0 ? this.corn_ - rez * 2 : 0;
    this.gold_ = this.gold_ - rez > 0 ? this.corn_ - rez : 0;
  }

  showShit() {
    console.log(
      `City: ${this.name_}, Corn ${this.corn_}, Gold: ${
        this.gold_
      }, Divinity: ${this.divinity.name}`
    );
    this.population_.showPop();
  }

  get name() {
    return this.name_;
  }

  get divinity() {
    return this.divinity_;
  }

  get population() {
    return this.population_;
  }

  get corn() {
    return this.gold_;
  }

  get gold() {
    return this.corn_;
  }

  set corn(corn) {
    this.corn_ = corn;
  }

  set gold(gold) {
    this.corn_ = gold;
  }
}

module.exports = {City};
