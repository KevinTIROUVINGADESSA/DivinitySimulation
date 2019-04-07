

class Guerrier {
    // Notion de temporalitée a implementer
    constructor(age,force,pv,moral)
    {
        this.prix = Math.random()*2;
        this.age = age;
        this.force = force;
        this.pv = pv;
        this.moral = Math.round(moral*100)/100;
    }

    Decrire()
    {
         console.log("Votre soldats a " + this.age + "ans, " + this.force + "de force, " + this.pv + "PV et "
             + this.moral + " de moral");
    }

    Attack(g)
    {
        switch (true) {
            case this.age <= 9 || this.age >=80:
                this.force = (this.force - 30 <= 0) ? 0 : Math.floor((this.force - 30) * this.moral);
                console.log("Votre soldat n a rien a foutre ici, vous avez vu son age, un peu de respect, atk " +
                    "est reduite a " + this.force);
                break;
            case this.age <= 15 || this.age >= 60:
                this.force = (this.force - 20 <= 0) ? 1 : Math.floor((this.force - 20) * this.moral);
                console.log("Votre soldat est trop age ou trop jeune pour faire la guerre son atk est reduite a "
                    + this.force);
                break;
            default:
                this.force = Math.floor(this.force * this.moral);
                if (this.moral > 0.5)
                {
                    console.log(`Votre soldat est qlq'un de positif, son atk est bostee ${this.force}`);
                }
                else
                {
                    console.log(`Votre soldat est qlq'un broie du noir, son atk est reduite ${this.force}`);
                }
        }
        if (Math.random() < 0.09)
        {
            this.force = 98;
            console.log(`Votre soldat a trouve l arme secrete ! Waouuuuuh ! Tema comment il est fort : ${this.force}`);
        }
        g.recevoirDegats(this.force);
        this.recevoirDegats(g.force);
    }

    recevoirDegats(degats)
    {
        if (this.pv - degats <= 0) {
            console.log(`Votre soldat a pris une grosse tatane, sa vie est passe de ${this.pv} a 0`);
            this.pv = 0;
        }
        else {
            console.log(`Votre soldat a pris une grosse tatane, sa vie est passe de ${this.pv} a ${this.pv - degats}`);
            this.pv -= degats;
        }
     }

    estVivant()
    {
        if(this.pv ==0) {
            if (this.age >= Math.random() * 100)
                console.log("Votre soldat est mort de vieillesse a " + this.age);
            return false;
        }
        else
            return true;
    }

}
module.exports = {Guerrier};