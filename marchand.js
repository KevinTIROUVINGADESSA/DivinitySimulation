
class Marchand {


    constructor(actual_corn,actual_gold)
    {
        this.max_corn = actual_corn +100;
        this.max_gold = actual_gold +100;
        this.actual_gold = actual_gold;
        this.actual_corn = actual_corn;
    }


    Decrire()
    {
        console.log(`Votre marchand a ${this.actual_gold} golds et ${this.actual_corn}` +
            `corns, il peut porter ${this.max_gold} gold ${this.max_corn} corn`);
    }

    Echange_gold_for_corn(m)
    {
        let max_gold_for_exchange = Math.min(m.max_gold - m.actual_gold, m.actual_corn/2,
            this.actual_gold, (this.max_corn - this.actual_corn)/2);
        let gold_for_exchange = Math.floor(Math.random()*max_gold_for_exchange);
        let corn_for_exchange = 2 * gold_for_exchange;

        this.actual_corn += corn_for_exchange;
        this.actual_gold -= gold_for_exchange;
        m.actual_corn -= corn_for_exchange;
        m.actual_gold += gold_for_exchange;
        console.log("Exchange gold for corn: Gold  Exchanged: " + gold_for_exchange + "Corn Exchanged: "
            + corn_for_exchange);
        console.log("Marchand 1: Gold: " + this.actual_gold + " MaxGold: " + this.max_gold +
            "Corn " + this.actual_corn + "Max Corn : " + this.max_corn);
        console.log("Marchand 2: Gold: " + m.actual_gold + " MaxGold: " + m.max_gold +
            "Corn " + m.actual_corn + "Max Corn : " + m.max_corn);
    }

    Echange_corn_for_gold(m)
    {
        let max_corn_for_exchange = Math.min(this.max_corn, (this.max_gold - this.actual_gold)*2,
            m.max_corn - m.actual_corn, m.actual_gold / 2);
        let corn_for_exchange = Math.floor(Math.random()*max_corn_for_exchange);
        let gold_for_exchange = corn_for_exchange / 2;

        this.actual_corn -= corn_for_exchange;
        this.actual_gold += gold_for_exchange;
        m.actual_corn += corn_for_exchange;
        m.actual_gold -= gold_for_exchange;
        console.log("Exchange corn for gold: Corn  Exchanged: " + corn_for_exchange + "Gold Exchanged: "
            + gold_for_exchange);
        console.log("Marchand 1: Gold: " + this.actual_gold + " MaxGold: " + this.max_gold +
            "Corn " + this.actual_corn + "Max Corn : " + this.max_corn);
        console.log("Marchand 2: Gold: " + m.actual_gold + " MaxGold: " + m.max_gold +
            "Corn " + m.actual_corn + "Max Corn : " + m.max_corn);
    }

}

module.exports = {Marchand};