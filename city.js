const {Divinity} = require('./divinity');
const {Population} = require('./population');

class City {
    constructor(name, divinityName) {
        this.name_ = name || 'UNKCITY';
        this.divinity_ = new Divinity(divinityName);
        this.population = new Population(Math.random() * 200, Math.random() * 200, Math.random() * 200);
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

    showShit() {
        console.log(`${this.name_}: C ${this.corn_}, G ${this.gold_}, Divinity ${this.divinity_.name}`);
        console.log(`${this.population.showPop()}`)
    }
}

module.exports = {City};