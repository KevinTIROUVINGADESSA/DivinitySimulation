
class Marchand {


    constructor(stack_corn,stack_gold,nbrecorn,nbregold)
    {
        this.stack_corn = stack_corn;
        this.stack_gold = stack_gold;
        this.gold = nbregold;
        this.corn = nbrecorn;

    }


    Decrire()
    {
        console.log(`Votre marchand a ${this.gold} golds et ${this.corn} corns, il peut porter ${this.stack_corn} corns ${this.stack_gold} golds`);
    }

    Echange_gold_to_corn(m,nbregold)
    {
        let corn_for_exchange = 2*nbregold;
        if(this.corn + corn_for_exchange > this.stack_corn)
        {
            console.log("Votre marchand ne peut pas porter autant de corn")
        }
        else if (this.gold-nbregold<0)
        {
            console.log("TA PA DARGENT CLOCHARD");
        }
        else
        {
            this.gold = this.gold - nbregold;
            this.corn = this.corn + corn_for_exchange;
        }
    }

    Echange_corn_to_gold(m,nbrecorn)
    {
        let gold_for_exchange = (1/2)*nbrecorn;
        if(this.gold + gold_for_exchange > this.stack_gold)
        {
            console.log("Votre marchand ne peut pas porter autant de gold")
        }
        else if (this.corn-nbrecorn<0)
        {
            console.log("PAS ASSEZ DE CORN");
        }
        else
        {
            this.corn = this.corn - nbrecorn;
            this.gold = this.gold + 2 * gold_for_exchange;
        }
    }

}
module.exports = {Marchand};