const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {Guerrier} = require('../guerrier');

chai.use(chaiAsPromised);
chai.should();


describe('Guerrier.js.js', () => {
    describe('Guerrier methods', () => {


        it('should get minus hp (depending on the attack), then if it gets lower than 0, it should equal 0', () =>{
            let guerrier1 = new Guerrier(50,50,50,50);
            guerrier1.recevoirDegats(40);
            guerrier1.pv.should.be.equal(10);
            guerrier1.recevoirDegats(20);
            guerrier1.pv.should.be.equal(0);
        });

        it('Warrior2\'s hp should get moral*attack', () =>{
            let guerrier1 = new Guerrier(50,50,50,1);
            let guerrier2 = new Guerrier(50,50,60,50);

            guerrier1.Attack(guerrier2);
            guerrier2.pv.should.be.equal(10);
        });

        it('Warrior2\'s hp should get moral*(attack - 20)', () =>{
            let guerrier1 = new Guerrier(50,50,50,1);
            let guerrier2 = new Guerrier(50,50,60,50);

            guerrier1.Attack(guerrier2);
            guerrier2.pv.should.be.equal(10);
        });



    });

});