
class Marchand {


    constructor(stack_corn,stack_gold)
    {
        this.max_corn = stack_corn;
        this.max_gold = stack_gold;
        this.actual_gold = Math.floor(Math.random()*stack_gold);
        this.actual_corn = Math.floor(Math.random()*stack_corn);
    }


    Decrire()
    {
        console.log(`Votre marchand a ${this.actual_gold} golds et ${this.actual_corn} corns, il peut porter ${this.max_gold} gold ${this.max_corn} corn`);
    }

    Echange_gold_to_corn(m,nbregold)
    {
        let corn_for_exchange = 2*nbregold;
        if(this.actual_corn + corn_for_exchange > this.max_corn)
        {
            console.log("Votre marchand ne peut pas porter autant de corn");
        }
        else if (this.actual_gold-nbregold<0)
        {
            console.log("TA PA DARGENT CLOCHARD");
        }
        else
        {
            this.actual_gold = this.actual_gold - nbregold;
            this.actual_corn = this.actual_corn + corn_for_exchange;
            m.actual_corn = m.actual_corn - corn_for_exchange;
            m.actual_gold = m.actual_gold + nbregold;
        }
    }

    Echange_corn_to_gold(m,nbrecorn)
    {
        let gold_for_exchange = (1/2)*nbrecorn;
        if(this.actual_gold + gold_for_exchange > this.max_gold)
        {
            console.log("Votre marchand ne peut pas porter autant de gold")
        }
        else if (this.actual_corn-nbrecorn<0)
        {
            console.log("PAS ASSEZ DE CORN");
        }
        else
        {
            this.actual_corn = this.actual_corn - nbrecorn;
            this.actual_gold = this.actual_gold + gold_for_exchange;
            m.actual_corn =  m.actual_corn + nbrecorn;
            m.actual_gold =  m.actual_gold - gold_for_exchange ;
        }
    }

}
module.exports = {Marchand};