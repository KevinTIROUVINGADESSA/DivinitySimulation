const {Divinity} = require('./divinity');
const {Population} = require('./population');

class City {
    constructor(name, divinityName) {
        this.name_ = name || 'UNKCITY';
        this.divinity_ = new Divinity(divinityName);
        this.population_ = new Population(Math.random() * 200, Math.random() * 200);
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

    fight(C2) {
        let max = (this.population_.nbGuerrier > C2.population.nbGuerrier) ? C2.population.nbGuerrier :
            this.population_.nbGuerrier;
        let i;
        let winThis = 0, winOther = 0;
        if (Math.random() <= 0.4999)
        {
            for (i = 0; i < max; i++) {
                this.population_.guerriers[i].Attack(C2.population.guerriers[i]);
                if (!this.population_.guerriers[i].estVivant()) {
                    console.log("Che ton soldat est mort comme une merde");
                    this.population_.nbGuerrier -= 1;
                    this.population_.guerriers.splice(i);
                    max = (this.population_.nbGuerrier > C2.population.nbGuerrier) ? C2.population.nbGuerrier :
                        this.population_.nbGuerrier;
                    console.log(max);
                    winOther ++;
                }
                if (!C2.population.guerriers[i].estVivant()) {
                    console.log("Votre guerrier a ete sauve par " + C2.divinity.name)
                    C2.population.guerriers[i].pv = 1;
                    winThis ++;
                }
            }
        }
        else
        {
            for (i = 0; i < max; i++)
            {
                console.log(i);
                C2.population.guerriers[i].Attack(this.population_.guerriers[i]);
                if (!C2.population.guerriers[i].estVivant()) {
                    console.log("Che ton soldat est mort comme une merde");
                    C2.population.nbGuerrier -= 1;
                    this.corn_ += C2.population.guerriers;
                    C2.population.guerriers.splice(i);
                    max = (this.population_.nbGuerrier > C2.population.nbGuerrier) ? C2.population.nbGuerrier :
                        this.population_.nbGuerrier;
                    console.log(max);
                    winThis ++;
                }
                if(!this.population_.guerriers[i].estVivant()) {
                    console.log("Votre guerrier a ete sauve par " + this.divinity.name);
                    this.population_.guerriers[i].pv = 1;
                    winOther ++;
                }
            }
        }
        if (winThis > winOther) {
            console.log("City: " + this.name_ + " is the winner WoooohWoooh ! DaTaGueule " + C2.name + " !");
            this.gold_ += C2.gold / 2;
            this.corn_ += C2.corn / 2;
            C2.gold /= 2;
            C2.corn /= 2;
        }
        else if (winThis === winOther) {
            console.log("MAAAAAAAAAAAAAAAAAAAATCH NUL ! DMG IL VA RIEN SE PASSER !");
        }
        else {
            console.log("City: " + C2.name + " is the winner WoooohWoooh ! DaTaGueule " + this.name_ + " !");
            C2.gold += this.gold_ / 2;
            C2.corn += this.corn_ / 2;
            this.gold_ /= 2;
            this.corn_ /= 2;
        }

    }

    trade(C2) {
        let max = (this.population_.nbMarchand > C2.population.nbMarchand) ? C2.population.nbMarchand :
            this.population_.nbMarchand;
        let i;
        if (Math.random() <= 0.4999) {
            for (i = 0; i < max; i++) {
                if (Math.random()<0.08) {
                    console.log("Votre marchand marchand a ete attaque par de vilains, super pas gentils brigands"
                        + "(Pas d echange il est die mamene)!");
                    this.population_.nbMarchand -= 1;
                    this.population_.marchands[i].splice(i);
                    max = (this.population_.nbMarchand > C2.population.nbMarchand) ? C2.population.nbMarchand :
                        this.population_.nbMarchand;
                }
                else {
                    this.population_.marchands[i].Echange_gold_for_corn(C2.population.marchands[i]);
                    this.gold_ = this.population_.marchands[i].actual_gold / 2;
                    this.corn_ = this.population_.marchands[i].actual_corn / 2;
                }
            }
        }
        else {
            for (i = 0; i < max; i++) {
                if (Math.random()<0.08) {
                    console.log("Votre marchand marchand a ete attaque par de vilains, super pas gentils brigands"
                        + "(Pas d echange il est die mamene)!");
                    C2.population.nbMarchand -= 1;
                    this.population_.marchands[i].splice(i);
                    max = (this.population_.nbMarchand > C2.population.nbMarchand) ? C2.population.nbMarchand :
                        this.population_.nbMarchand;
                }
                else {
                    this.population_.marchands[i].Echange_corn_for_gold(C2.population.marchands[i]);
                    this.gold_ = this.population_.marchands[i].actual_gold / 2;
                    this.corn_ = this.population_.marchands[i].actual_corn / 2;
                }
            }
        }
    }

    cout_troupes() {
        let i, rez = 0;
        for (i = 0; i < this.population_.nbGuerrier; i++) {
            rez += this.population_.guerriers[i].prix;
        }
        for (i = 0; i < this.population_.nbMarchand; i++) {
            rez += this.population_.marchands[i].prix;
        }
        this.corn_ = (this.corn_ - rez*2 > 0) ? (this.corn_ - rez*2) : 0;
        this.gold_ = (this.gold_ - rez > 0) ? (this.corn_ - rez) : 0;
        if (this.corn_ == 0 || this.gold_ == 0) {
            delete this.population_;
        }

    }



    showShit() {
        console.log(`City: ${this.name_}, Corn ${this.corn_}, Gold: ${this.gold_}, Divinity: ${this.divinity.name}`);
        this.population.showPop();
    }

    get name(){
        return this.name_;
    }
    get divinity(){
        return this.divinity_;
    }
    get population(){
        return this.population_;
    }
    get corn() {
        return this.gold_;
    }

    get gold() {
        return this.corn_;
    }

    set corn(corn){
        this.corn_ = corn;
    }

    set gold(gold){
        this.corn_ = gold;
    }






}

module.exports = {City};