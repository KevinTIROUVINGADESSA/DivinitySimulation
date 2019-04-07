
class Marchand {


    constructor(actual_corn,actual_gold)
    {
        this.prix_ = Math.random()*2;
        this.max_corn_ = actual_corn +100;
        this.max_gold_ = actual_gold +100;
        this.actual_gold_ = actual_gold;
        this.actual_corn_ = actual_corn;
    }


    Decrire()
    {
        console.log(`Votre marchand a ${this.actual_gold_} golds et ${this.actual_corn_}` +
            `corns, il peut porter ${this.max_gold_} gold ${this.max_corn_} corn`);
    }

    Echange_gold_for_corn(m)
    {
        let max_gold_for_exchange = Math.min(m.max_gold - m.actual_gold, m.actual_corn/2,
            this.actual_gold_, (this.max_corn_ - this.actual_corn_)/2);
        let gold_for_exchange = Math.floor(Math.random()*max_gold_for_exchange);
        let corn_for_exchange = 2 * gold_for_exchange;

        this.actual_corn_ += corn_for_exchange;
        this.actual_gold_ -= gold_for_exchange;
        m.actual_corn -= corn_for_exchange;
        m.actual_gold += gold_for_exchange;
        console.log("Exchange gold for corn: Gold Exchanged: " + gold_for_exchange + " CornExchanged: "
            + corn_for_exchange);
        console.log("Marchand 1: Gold: " + this.actual_gold_ + " MaxGold: " + this.max_gold_ +
            "Corn " + this.actual_corn_ + " Max Corn : " + this.max_corn_);
        console.log("Marchand 2: Gold: " + m.actual_gold + " MaxGold: " + m.max_gold +
            "Corn " + m.actual_corn + " Max Corn : " + m.max_corn);
    }

    Echange_corn_for_gold(m)
    {
        let max_corn_for_exchange = Math.min(this.max_corn_, (this.max_gold_ - this.actual_gold_)*2,
            m.max_corn - m.actual_corn, m.actual_gold / 2);
        let corn_for_exchange = Math.floor(Math.random()*max_corn_for_exchange);
        let gold_for_exchange = corn_for_exchange / 2;

        this.actual_corn -= corn_for_exchange;
        this.actual_gold += gold_for_exchange;
        m.actual_corn += corn_for_exchange;
        m.actual_gold -= gold_for_exchange;
        console.log("Exchange corn for gold: CornExchanged: " + corn_for_exchange + " GoldExchanged: "
            + gold_for_exchange);
        console.log("Marchand 1: Gold: " + this.actual_gold_ + " MaxGold: " + this.max_gold_ +
            "Corn " + this.actual_corn_ + " Max Corn : " + this.max_corn_);
        console.log("Marchand 2: Gold: " + m.actual_gold + " MaxGold: " + m.max_gold +
            "Corn " + m.actual_corn + " Max Corn : " + m.max_corn);
    }

    get prix()
    {
        return this.prix_;
    }

    set prix(p)
    {
        this.prix_=p;
    }

    get max_corn()
    {
        return this.max_corn_;
    }

    set max_corn(c)
    {
        this.max_corn_ = c;
    }

    get max_gold()
    {
        return this.max_gold_;
    }

    set max_gold(g)
    {
        this.max_gold_=g;
    }

    get actual_gold()
    {
        return this.actual_gold_;
    }

    set actual_gold(ag)
    {
        this.actual_gold_ = ac;
    }

    get actual_corn()
    {
        return this.actual_corn_;
    }

    set actual_corn(ac)
    {
        this.actual_corn_ = ac;
    }

}

module.exports = {Marchand};