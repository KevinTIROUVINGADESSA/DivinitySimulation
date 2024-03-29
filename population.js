const {Guerrier} = require('./guerrier');
const {Marchand} = require('./marchand');

class Population {
  constructor(nbMarchand, nbGuerrier) {
    this.nbMarchand_ = nbMarchand;
    this.nbGuerrier_ = nbGuerrier;
    this.guerriers_ = [];
    this.marchands_ = [];
    this.init();
  }

  init() {
    for (let i = 0; i < this.nbGuerrier_; i++) {
      this.guerriers_[i] = new Guerrier(
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.floor(Math.random() * 100),
        Math.random()
      );
    }

    for (let i = 0; i < this.nbMarchand_; i++) {
      this.marchands_[i] = new Marchand(
        Math.floor(1000 / this.nbMarchand_),
        Math.floor(1000 / this.nbMarchand_)
      );
    }
  }

  showPop() {
    let now;
    console.log('La population est constituee de :');
    console.log(`Nombre de marchands : ${this.nbMarchand_}`);
    for (let i = 0; i < this.nbMarchand_; i++) {
      this.marchands_[i].decrire();
      now = new Date().getTime();
      while (new Date().getTime() < now + 500) {}
    }

    console.log(`Nombre de guerriers : ${this.nbGuerrier_}`);
    for (let i = 0; i < this.nbGuerrier_; i++) {
      this.guerriers_[i].decrire();
      now = new Date().getTime();
      while (new Date().getTime() < now + 500) {}
    }
  }

  get nbMarchand() {
    return this.nbMarchand_;
  }

  set nbMarchand(nm) {
    this.nbMarchand_ = nm;
  }

  get nbGuerrier() {
    return this.nbGuerrier_;
  }

  set nbGuerrier(ng) {
    this.nbGuerrier_ = ng;
  }

  get guerriers() {
    return this.guerriers_;
  }

  set guerriers(a) {
    this.guerriers_ = a;
  }

  get marchands() {
    return this.marchands_;
  }

  set marchands(b) {
    this.marchands_ = b;
  }
}

module.exports = {Population};
