const {Divinity} = require('./divinity');
const {Population} = require('./population');

class City {
    constructor(name, divinityName) {
        this.name_ = name || 'UNKCITY';
        this.divinity = new Divinity(divinityName);
        this.population = new Population(Math.random() * 200, Math.random() * 200);
        this.corn = 1000;
        this.gold = 1000;
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
        this.divinity.offeringCorn(this.corn_);
        this.divinity.offeringGold(this.gold_);
        this.corn_ = 0;
        this.gold_ = 0;
    }

    /*get corn() {
        return this.gold_;
    }

    get gold() {
        return this.corn_;
    }*/

    fight(C2) {
        let max = (this.population.nbGuerrier > C2.population.nbGuerrier) ? C2.population.nbGuerrier :
            this.population.nbGuerrier;
        let i;
        if (Math.random() <= 0.4999)
        {
            for (i = 0; i < max; i++) {
                this.population.guerriers[i].Attack(C2.population.guerriers[i]);
                if (!this.population.guerriers[i].estVivant()) {
                    console.log("Che ton soldat est mort comme une merde");
                    this.population.nbGuerrier -= 1;
                    this.population.guerriers.splice(i);
                    max = (this.population.nbGuerrier > C2.population.nbGuerrier) ? C2.population.nbGuerrier :
                        this.population.nbGuerrier;
                }
                if (!C2.population.guerriers[i].estVivant()) {
                    console.log("Votre guerrier a ete sauve par " + C2.divinity.name)
                    C2.population.guerriers[i].pv = 1;
                }
            }
        }
        else
        {
            for (i = 0; i < max; i++)
            {
                console.log(i);
                C2.population.guerriers[i].Attack(this.population.guerriers[i]);
                if (!C2.population.guerriers[i].estVivant()) {
                    console.log("Che ton soldat est mort comme une merde");
                    C2.population.nbGuerrier -= 1;
                    this.corn += C2.population.guerriers
                    C2.population.guerriers.splice(i);
                    max = (this.population.nbGuerrier > C2.population.nbGuerrier) ? C2.population.nbGuerrier :
                        this.population.nbGuerrier;
                }
                if(!this.population.guerriers[i].estVivant()) {
                    console.log("Votre guerrier a ete sauve par " + this.divinity.name);
                    this.population.guerriers[i].pv = 1;
                }
            }
        }
    }

    trade(C2) {
        let max = (this.population.nbMarchand > C2.population.nbMarchand) ? C2.population.nbMarchand :
            this.population.nbMarchand;
        let i;
        if (Math.random() <= 0.4999)
        {
            for (i = 0; i < max; i++)
            {
                if (Math.random()<0.08) {
                    console.log("Votre marchand marchand a ete attaque par de vilains, super pas gentils brigands"
                    + "(Pas d echange il est die mamene)!");
                    this.population.nbMarchand -= 1;
                    this.population.marchands[i].splice(i);
                    max = (this.population.nbMarchand > C2.population.nbMarchand) ? C2.population.nbMarchand :
                        this.population.nbMarchand;
                }
                else {
                    this.population.marchands[i].Echange_gold_for_corn(C2.population.marchands[i]);
                    this.gold = this.population.marchands[i].actual_gold / 2;
                    this.corn = this.population.marchands[i].actual_corn / 2;
                }
            }
        }
        else
        {
            for (i = 0; i < max; i++)
            {
                if (Math.random()<0.08) {
                    console.log("Votre marchand marchand a ete attaque par de vilains, super pas gentils brigands"
                        + "(Pas d echange il est die mamene)!");
                    C2.population.nbMarchand -= 1;
                    this.population.marchands[i].splice(i);
                    max = (this.population.nbMarchand > C2.population.nbMarchand) ? C2.population.nbMarchand :
                        this.population.nbMarchand;
                }
                else {
                    this.population.marchands[i].Echange_corn_for_gold(C2.population.marchands[i]);
                    this.gold = this.population.marchands[i].actual_gold / 2;
                    this.corn = this.population.marchands[i].actual_corn / 2;
                }
            }
        }
    }

    cout_troupes() {
        let i, rez = 0;
        for (i = 0; i < this.population.nbGuerrier; i++)
        {
            rez += this.population.guerriers[i].prix;
        }
        for (i = 0; i < this.population.nbMarchand; i++)
        {
            rez += this.population.marchands[i].prix;
        }
        this.corn = (this.corn - rez*2 > 0) ? (this.corn - rez*2) : 0;
        this.gold = (this.gold - rez > 0) ? (this.corn - rez) : 0;
        if (this.corn == 0 || this.gold == 0) {
            this.population.destroy();
        }

    }

    showShit() {
        console.log(`City: ${this.name_}, Corn ${this.corn_}, Gold: ${this.gold_}, Divinity: ${this.divinity.name}`);
        this.population.showPop();
    }
}

module.exports = {City};