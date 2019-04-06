const {Divinity} = require('./divinity');
const {Population} = require('./population');

class City {
    constructor(name, divinityName) {
        this.name_ = name || 'UNKCITY';
        this.divinity = new Divinity(divinityName);
        this.population = new Population(Math.random() * 200, Math.random() * 200, Math.random() * 200);
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
        this.divinity.offeringCorn(this.corn_);
        this.divinity.offeringGold(this.gold_);
        this.corn_ = 0;
        this.gold_ = 0;
    }

    get corn() {
        return this.gold_;
    }

    get gold() {
        return this.corn_;
    }

    fight(C2) {
        let max = (this.population.nbGuerrier > C2.population.nbGuerrier) ? C2.population.nbGuerrier :
            this.population.nbGuerrier;
        if (Math.random() <= 0.4999)
        {
            /*for (let i = 0; i < max; i++)
            {
                this.population.guerriers[i]. (C2.population.marchands[i]);
            }*/
        }
        else
        {
            for (let i = 0; i < max; i++)
            {
                this.population.marchands[i].Echange_corn_for_gold(C2.population.marchands[i]);
            }
        }
    }

    trade(C2) {
        let max = (this.population.nbMarchand > C2.population.nbMarchand) ? C2.population.nbMarchand :
            this.population.nbMarchand;
        if (Math.random() <= 0.4999)
        {
            for (let i = 0; i < max; i++)
            {
                this.population.marchands[i].Echange_gold_for_corn(C2.population.marchands[i]);
            }
        }
        else
        {
            for (let i = 0; i < max; i++)
            {
                this.population.marchands[i].Echange_corn_for_gold(C2.population.marchands[i]);
            }
        }
    }

    showShit() {
        console.log(`City: ${this.name_}: Corn ${this.corn_}, Gold: ${this.gold_}, Divinity:${this.divinity.name}`);
        this.population.showPop();
    }
}

module.exports = {City};