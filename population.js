const {Guerrier} = require('./guerrier');
const {Marchand} = require('./marchand');

class Population {

    constructor(nbMarchand, nbGuerrier) {
        this.nbMarchand = 3; /* Math.floor(nbMarchand); */
        this.nbGuerrier = 3;/*Math.floor(nbGuerrier);*/
        this.guerriers = [];
        this.marchands = [];
        this.init();
    }

    init() {
        for (let i = 0; i < this.nbGuerrier; i++)
        {
            this.guerriers[i] = new Guerrier(Math.floor(Math.random()*50), Math.floor(Math.random()*50),
                Math.floor(Math.random()*50), Math.random());
        }
        for (let i = 0; i < this.nbMarchand; i++)
        {
            this.marchands[i] = new Marchand(Math.floor(1000/this.nbMarchand), Math.floor(1000/this.nbMarchand));
        }
    }

    showPop() {
        let now;
        console.log("La population est constituee de :");
        console.log(`Nombre de marchands : ${this.nbMarchand}`);
        for (let i = 0; i < this.nbMarchand; i++) {
            this.marchands[i].Decrire();
            now = new Date().getTime();
            while(new Date().getTime() < now + 500) { }
        }
        console.log(`Nombre de guerriers : ${this.nbGuerrier}`);
        for (let i = 0; i < this.nbGuerrier; i++) {
            this.guerriers[i].Decrire();
            now = new Date().getTime();
            while(new Date().getTime() < now + 500) { }
        }
    }

    reviveGue() {
        let transfert = Math.random() * 100;
        if (this.nbGuerrier == 0) {
            this.nbGuerrier = transfert;
            this.nbMarchand = Math.floor(transfert/2) - 1;
        }
    }

    popOver() {
        if (this.nbGuerrier || this.nbMarchand) {
            console.log('Allah akhbar !');
            console.log('La ville est detruite par manque de citoyen');
            delete this;
        }
    }
}

module.exports = {Population};
