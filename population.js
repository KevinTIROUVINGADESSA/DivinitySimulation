const {Guerrier} = require('./guerrier');
const {Marchand} = require('./marchand');

class Population {

    constructor(nbPeon, nbMarchand, nbGuerrier) {
        this.nbPeon = 2; /*Math.floor(nbPeon);*/
        this.nbMarchand = 3; /* Math.floor(nbMarchand); */
        this.nbGuerrier = 3 ;/*Math.floor(nbGuerrier);*/
        this.guerriers = [];
        this.marchands = [];
        /*this.peons = [];*/
        this.init();
    }

    init() {
        for (let i = 0; i < this.nbGuerrier; i++)
        {
            this.guerriers[i] = new Guerrier(Math.floor(Math.random()*50), Math.floor(Math.random()*50),
                Math.floor(Math.random()*50), Math.floor(Math.random()*50));
        }
        for (let i = 0; i < this.nbMarchand; i++)
        {
            this.marchands[i] = new Marchand(Math.floor(Math.random()*50), Math.floor(Math.random()*50),
                Math.floor(Math.random()*50), Math.floor(Math.random()*50))
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
        for (let i = 0; i < this.nbMarchand; i++)
        {
            console.log(`${this.marchands[i].Decrire()}`);
            var now = new Date().getTime();
            while(new Date().getTime() < now + 500) { }
        }
        console.log(`Nombre de guerriers : ${this.nbGuerrier}`);
        for (let i = 0; i < this.nbGuerrier; i++)
        {
            console.log(`${this.guerriers[i].Decrire()}`);
            var now = new Date().getTime();
            while(new Date().getTime() < now + 500) { }
        }
        console.log(`Nombre de peons : ${this.nbPeon}`);
        /*for (var i = 0; i < this.nbPeon; i++)
        {
            console.log(`${this.peons[i].Decrire()}`);
        }*/
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
