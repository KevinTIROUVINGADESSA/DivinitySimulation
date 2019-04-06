const {Divinity} = require('./divinity');
const {Population} = require('./population');

class City {
    constructor(name, divinityName) {
        this.name_ = name || 'UNKCITY';
        this.divinity_ = new Divinity(divinityName);
        this.population_ = new Population(Math.random() * 200, Math.random() * 200, Math.random() * 200);
        this.corn_ = 1000;
        this.gold_ = 1000;
        this.init();
    }

    init() {
        this.divinity_.init();
        this.divinity_.worldEvents.on('favor', shit => this.getShit(shit));
        this.divinity_.worldEvents.on('blessing', shit => this.getShit(shit));
    }

    getShit(s) {
        this.corn_ += Math.floor(s.corn);
        this.gold_ += Math.floor(s.gold);
    }

    giveShit() {
        this.divinity_.offeringCorn(this.corn_);
        this.divinity_.offeringGold(this.gold_);
        this.corn_ = 0;
        this.gold_ = 0;
    }

    get corn() {
        return this.gold_;
    }

    get gold() {
        return this.corn_;
    }

    trade(C2) {
        let max = (this.population_.nbMarchand > C2.population_.nbMarchand) ? C2.population_.nbMarchand :
            this.population_.nbMarchand;
        if (Math.random() <= 0.4999)
        {
            for (let i = 0; i < max; i++)
            {
                this.population_.marchands[i].Echange_corn_to_gold(C2.population_.marchands[i])
            }
        }
        else
        {
            for (let i = 0; i < max; i++)
            {
                this.population_.marchands[i].Echange_corn_to_gold(C2.population_.marchands[i])
            }
        }
    }

    showShit() {
        console.log(`City: ${this.name_}: Corn ${this.corn_}, Gold: ${this.gold_}, Divinity:${this.divinity_.name}`);
        console.log(`${this.population_.showPop()}`)
    }
}

module.exports = {City};