class Population {

    constructor(nbPeon, nbMarchand, nbGuerrier) {
        this.nbPeon = Math.floor(nbPeon);
        this.nbMarchand = Math.floor(nbMarchand);
        this.nbGuerrier = Math.floor(nbGuerrier);
    }
    showPop() {
        console.log("La population est constituee de :");
        console.log(`Nombre de marchands : ${this.nbMarchand}`);
        console.log(`Nombre de guerriers : ${this.nbGuerrier}`);
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
