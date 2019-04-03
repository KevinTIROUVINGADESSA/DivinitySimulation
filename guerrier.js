

class Guerrier {

    constructor(age,force,pv,moral)
    {
        this.age = age || "ELIAS";
        this.force = force;
        this.pv = pv;
        this.moral = Math.random()*100/this.age;
    }

    Decrire()
    {
        console.log(`Vos soldats ont ${this.age} ans, ${this.force} de force, ${this.pv} PV et ${this.moral} de moral`);
    }

    Attack(g)
    {
        g.recevoirDegats(this.force);
    }

    recevoirDegats(degats)
    {
        this.pv -= degats;

        if(this.pv<0)
        {
            this.pv = 0;
        }
    }

    Armesecrete(degatsNouvelleArme)
    {
        this.force = degatsNouvelleArme;
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