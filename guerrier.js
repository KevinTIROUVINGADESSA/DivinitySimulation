class Guerrier {
  // Notion de temporalitée a implementer
  constructor(age, force, pv, moral) {
    this.prix_ = Math.random() * 2;
    this.age_ = age;
    this.force_ = force;
    this.pv_ = pv;
    this.moral_ = Math.round(moral * 100) / 100;
  }

  decrire() {
    console.log(
      'Votre soldats a ' +
        this.age_ +
        'ans, ' +
        this.force_ +
        'de force, ' +
        this.pv_ +
        'PV et ' +
        this.moral_ +
        ' de moral'
    );
  }

  attack(g) {
    switch (true) {
      case this.age_ <= 9 || this.age_ >= 80:
        this.force_ =
          this.force_ - 30 <= 0
            ? 0
            : Math.floor((this.force_ - 30) * this.moral_);
        console.log(
          'Votre soldat n a rien a foutre ici, vous avez vu son age, un peu de respect, atk ' +
            'est reduite a ' +
            this.force_
        );
        break;
      case this.age_ <= 15 || this.age_ >= 60:
        this.force_ =
          this.force_ - 20 <= 0
            ? 1
            : Math.floor((this.force_ - 20) * this.moral_);
        console.log(
          'Votre soldat est trop age ou trop jeune pour faire la guerre son atk est reduite a ' +
            this.force_
        );
        break;
      default:
        this.force_ = Math.floor(this.force_ * this.moral_);
        if (this.moral_ > 0.5) {
          console.log(
            `Votre soldat est qlq'un de positif, son atk est bostee ${
              this.force_
            }`
          );
        } else {
          console.log(
            `Votre soldat est qlq'un broie du noir, son atk est reduite ${
              this.force_
            }`
          );
        }
    }

    if (Math.random() < 0.09) {
      this.force_ = 98;
      console.log(
        `Votre soldat a trouve l arme secrete ! Waouuuuuh ! Tema comment il est fort : ${
          this.force_
        }`
      );
    }

    g.recevoirDegats(this.force_);
    this.recevoirDegats(g.force);
  }

  recevoirDegats(degats) {
    if (this.pv_ - degats <= 0) {
      console.log(
        `Votre soldat a pris une grosse tatane, sa vie est passe de ${
          this.pv_
        } a 0`
      );
      this.pv_ = 0;
    } else {
      console.log(
        `Votre soldat a pris une grosse tatane, sa vie est passe de ${
          this.pv_
        } a ${this.pv_ - degats}`
      );
      this.pv_ -= degats;
    }
  }

  estVivant() {
    if (this.pv_ === 0) {
      if (this.age_ >= Math.random() * 100)
        console.log('Votre soldat est mort de vieillesse a ' + this.age_);
      return false;
    }

    return true;
  }

  get pv() {
    return this.pv_;
  }

  set pv(v) {
    this.pv_ = v;
  }

  get force() {
    return this.force_;
  }

  set force(v) {
    this.force_ = v;
  }

  get prix() {
    return this.prix_;
  }

  set prix(v) {
    this.prix_ = v;
  }
}
module.exports = {Guerrier};
