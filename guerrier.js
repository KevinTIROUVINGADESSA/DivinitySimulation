

class Guerrier {
    // Notion de temporalitée a implementer
    constructor(age,force,pv,moral)
    {
        this.age = age;
        this.force = force;
        this.pv = pv;
        this.moral = moral;
    }

    Decrire()
    {
         console.log(`Votre soldats a ${this.age} ans, ${this.force} de force, ${this.pv} PV et ${this.moral} de moral`);
    }

    Attack(g)
    {
        switch (this.age) {
            case this.age <= 15 || this.age >= 60:
                this.force = (this.force - 20 <= 0) ? 1 * this.moral : (this.force - 20) * this.moral;
                console.log(`Votre soldat est trop age ou trop jeune pour faire la guerre son atk est reduite a ${this.force}`);
                break;
            case this.age <= 9 || this.age >=80:
                this.force = (this.force - 30 <= 0) ? 0 : (this.force - 30) * this.moral;
                console.log(`Votre soldat n a rien a foutre ici, vous avez vu son age, un peu de respect, atk est reduite a ${this.force}`);
                break;
            default:
                this.force = this.force * this.moral;
                if (this.moral > 0.5)
                {
                    console.log(`Votre soldat est qlq'un de positif, son atk est bostee ${this.force}`);
                }
                else
                {
                    console.log(`Votre soldat est qlq'un broie du noir, son atk est reduite ${this.force}`);
                }
        }
        if (Math.random() < 0.1)
        {
            this.force = 98;
            console.log(`Votre soldat a trouve l arme secrete ! Waouuuuuh ! Tema comment il est fort : ${this.force}`);
        }
        g.recevoirDegats(this.force);
    }

    recevoirDegats(degats)
    {
        console.log(`Votre a pris une grosse tatane, sa vie est passe de ${this.pv} a ${this.pv - degats}`);
        this.pv -= degats;

        if(this.pv<0)
        {
            this.pv = 0;
        }
    }

    estVivant()
    {
        if(this.pv ==0)
            return false;
        else
            return true;
    }

}
module.exports = {Guerrier};