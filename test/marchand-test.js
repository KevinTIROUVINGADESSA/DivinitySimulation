const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {Marchand} = require('../marchand');

chai.use(chaiAsPromised);
chai.should();

describe('Marchand.js', () => {
    describe('Marchand methods', () => {
        let marchandTest1 = new Marchand(200,200);
        let marchandTest2 = new Marchand(200,200);

        it('gold exchange', () => {
            marchandTest1.Echange_corn_for_gold(marchandTest2);
            marchandTest1.gold.should.be.above(marchandTest1.corn);

            marchandTest1.gold.should.be.equal((marchandTest2.corn - 200)/2 + 200);
            marchandTest2.corn.should.be.above(marchandTest2.gold);
        });

        it('corn exchange ', () => {
            marchandTest1.Echange_gold_for_corn(marchandTest2);
            marchandTest1.corn.should.be.above(marchandTest1.gold);
            marchandTest1.gold.should.be.equal((marchandTest2.corn - 200)/2 + 200);
            marchandTest2.gold.should.be.above(marchandTest2.corn);
        });

    });

});