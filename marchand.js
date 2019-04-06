
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
            console.log("Votre marchand ne peut pas porter que " + (this.max_corn - this.actual_corn));
            console.log("Vous allez donc echanger pour obtenir " + (this.max_corn - this.actual_corn) + "corn");

            let corn_for_exchange = this.max_corn - this.actual_corn;
            let gold_for_exchange = corn_for_exchange / 2 ;

            console.log("Action effectuée avec succès !  il reste " + this.actual_gold +" gold au marchand 1"
                + " il gagne " + exchange_corn +" corn et possede desormais" + this.actual_corn +" corn");

            this.actual_corn += corn_for_exchange;
            this.actual_gold -= gold_for_exchange;
            m.actual_corn -= corn_for_exchange;
            m.actual_gold += gold_for_exchange;
            console.log("Marchand 2 :" + m.actual_gold +" gold, " + m.actual_corn +" corn");

        }
        else if (this.actual_gold-gold_for_exchange<0)
        {
            console.log("TA PA D'ARGENT CLOCHARD");
            console.log("Vous ne pouvez payer que" + this.actual_gold*2 +" corn");

            gold_for_exchange = this.actual_gold;
            corn_for_exchange = gold_for_exchange*2;

            console.log("Un échange va avoir lieu : " + gold_for_exchange + " gold contre " + corn_for_exchange + " corn");

            this.actual_corn += corn_for_exchange;
            this.actual_gold -= gold_for_exchange;
            console.log("Action effectuée avec succès !  il reste " + this.actual_gold +" gold au marchand 1"
                + " il gagne " + corn_for_exchange +" corn et possede desormais" + this.actual_corn +" corn");
            m.actual_corn -= corn_for_exchange;
            m.actual_gold += gold_for_exchange;
            console.log("Marchand 2 :" + m.actual_gold +" gold, " + m.actual_corn +" corn");
        }
        else
        {
            console.log("Un échange va avoir lieu : " + gold_for_exchange + " gold contre " + corn_for_exchange + " corn");

            this.actual_gold = this.actual_gold - gold_for_exchange;
            this.actual_corn = this.actual_corn + corn_for_exchange;
            console.log("Action effectuée avec succès !  il reste " + this.actual_gold +" gold au marchand 1"
                        + " il gagne " + corn_for_exchange +" corn et possede desormais" + this.actual_corn +" corn");
            m.actual_gold = m.actual_gold + gold_for_exchange;
            m.actual_corn = m.actual_corn - corn_for_exchange;
            console.log("Marchand 2 :" + m.actual_gold +" gold, " + m.actual_corn +" corn");
        }
    }

    Echange_corn_for_gold(m)
    {
        let corn_for_exchange = Math.floor(Math.random()*this.actual_corn);
        let gold_for_exchange = (1/2)*corn_for_exchange;
        if(this.actual_gold + gold_for_exchange > this.max_gold)
        {
            console.log("Votre marchand ne peut pas porter autant de gold");
            console.log("Vous allez donc echanger pour obtenir " + (this.max_gold - this.actual_gold) + "gold");

            let gold_for_exchange = this.max_gold - this.actual_gold;
            let corn_for_exchange = gold_for_exchange * 2 ;

            console.log("Action effectuée avec succès !  il reste " + this.actual_corn +" corn au marchand 1"
                + " il gagne " + gold_for_exchange +" gold et possede desormais" + this.actual_gold +" gold");

            this.actual_corn -= corn_for_exchange;
            this.actual_gold += gold_for_exchange;
            m.actual_corn += corn_for_exchange;
            m.actual_gold -= gold_for_exchange;
            console.log("Marchand 2 :" + m.actual_gold +" gold, " + m.actual_corn +" corn");
        }
        else if (this.actual_corn-corn_for_exchange<0)
        {
            console.log("PAS ASSEZ DE CORN POUR LECHANGE");
            console.log("Vous ne pouvez payer que" + this.actual_corn/2 +" gold");

            corn_for_exchange = this.actual_corn;
            gold_for_exchange = corn_for_exchange/2;

            console.log("Un échange va avoir lieu : " + corn_for_exchange + " corn contre " + gold_for_exchange + " gold");

            this.actual_gold += gold_for_exchange;
            this.actual_corn -= corn_for_exchange;
            console.log("Action effectuée avec succès !  il reste " + this.actual_corn +" corn au marchand 1"
                + " il gagne " + gold_for_exchange +" gold et possede desormais" + this.actual_gold +" gold");
            m.actual_gold -= gold_for_exchange;
            m.actual_corn += corn_for_exchange;
            console.log("Marchand 2 :" + m.actual_gold +" gold, " + m.actual_corn +" corn");
        }
        else
        {
            console.log("Un échange va avoir lieu : " + corn_for_exchange + " corn contre " + gold_for_exchange + " gold");
            this.actual_corn = this.actual_corn - corn_for_exchange;
            this.actual_gold = this.actual_gold + gold_for_exchange;
            console.log("Action effectuée avec succès !  il reste " + this.actual_corn +" corn au marchand 1"
                + " il gagne " + gold_for_exchange +" gold et possede desormais" + this.actual_gold +" gold");
            m.actual_corn =  m.actual_corn + corn_for_exchange;
            m.actual_gold =  m.actual_gold - gold_for_exchange ;
            console.log("Marchand 2 :" + m.actual_gold +" gold, " + m.actual_corn +" corn");

        }
    }

<<<<<<< HEAD
=======
    get corn()
    {
        return this.actual_corn;
    }

    get gold()
    {
        return this.actual_gold;
    }

>>>>>>> 4f3da75d28f1dda291243be3d57a9685506b3930

}
module.exports = {Marchand};