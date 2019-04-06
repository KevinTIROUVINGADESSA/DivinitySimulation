
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
        console.log(`Votre marchand a ${this.actual_gold} golds et ${this.actual_corn} corns, il peut porter ${this.max_gold} gold ${this.max_corn} corn`);
    }

    Echange_gold_for_corn(m)
    {
        let gold_for_exchange = Math.floor(Math.random()*this.actual_gold);
        let corn_for_exchange = 2*gold_for_exchange;
        if(this.actual_corn + corn_for_exchange > this.max_corn)
        {
            console.log("Votre marchand ne peut pas porter autant de corn");
        }
        else if (this.actual_gold-gold_for_exchange<0)
        {
            console.log("TA PA DARGENT CLOCHARD");
        }
        else
        {
            this.actual_gold = this.actual_gold - gold_for_exchange;
            this.actual_corn = this.actual_corn + corn_for_exchange;
            m.actual_corn = m.actual_corn - corn_for_exchange;
            m.actual_gold = m.actual_gold + gold_for_exchange;
        }
    }

    Echange_corn_for_gold(m)
    {
        let corn_for_exchange = Math.floor(Math.random()*this.actual_corn);
        let gold_for_exchange = (1/2)*corn_for_exchange;
        if(this.actual_gold + gold_for_exchange > this.max_gold)
        {
            console.log("Votre marchand ne peut pas porter autant de gold")
        }
        else if (this.actual_corn-corn_for_exchange<0)
        {
            console.log("PAS ASSEZ DE CORN");
        }
        else
        {
            this.actual_corn = this.actual_corn - corn_for_exchange;
            this.actual_gold = this.actual_gold + gold_for_exchange;
            m.actual_corn =  m.actual_corn + corn_for_exchange;
            m.actual_gold =  m.actual_gold - gold_for_exchange ;
        }
    }

}
module.exports = {Marchand};