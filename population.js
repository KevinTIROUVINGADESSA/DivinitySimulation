const {Guerrier} = require('./guerrier');
const {Marchand} = require('./marchand');

class Population {

    guerriers;
    marchands;
    peons;

    constructor(nbPeon, nbMarchand, nbGuerrier) {
        this.nbPeon = Math.floor(nbPeon);
        this.nbMarchand = Math.floor(nbMarchand);
        this.nbGuerrier = Math.floor(nbGuerrier);
        this.init();
    }

    init() {
        for (var i = 0; i < this.nbGuerrier; i++)
        {
            this.guerriers[i] = new Guerrier(Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*2)
        }
        for (var i = 0; i < this.nbMarchand; i++)
        {
            this.marchands[i] = new Marchand(Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100);
        }
        /*for (var i = 0; i < this.nbPeon; i++)
        {
            this.peons[i] = new Peons(Math.random()*100, Math.random()*100,
                Math.random()*100, Math.random()*100);
        }*/

    }

    showPop() {
        console.log("La population est constituee de :");
        console.log(`Nombre de marchands : ${this.nbMarchand}`);
        for (var i = 0; i < this.nbMarchand; i++)
        {
            console.log(`${this.marchands[i].Decrire()}`);
        }
        console.log(`Nombre de guerriers : ${this.nbGuerrier}`);
        for (var i = 0; i < this.nbGuerrier; i++)
        {
            console.log(`${this.guerriers[i].Decrire()}`);
        }
        console.log(`Nombre de peons : ${this.nbPeon}`);

    }

    reviveGue() {
        let transfert = Math.random() * 100;
        if (this.nbGuerrier == 0)
        {
            this.nbGuerrier = transfert;
            this.nbPeon = Math.floor(transfert/2) + 1;
            this.nbMarchand = Math.floor(transfert/2) - 1;
        }
    }

    popOver() {
        if (this.nbGuerrier || this.nbMarchand || this.nbPeon)
        {
            console.log('Allah akhbar !');
            console.log('La ville est detruite par manque de citoyen');
            delete this;
        }
    }
}

module.exports = {Population};
