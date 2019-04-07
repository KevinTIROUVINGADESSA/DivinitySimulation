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
            marchandTest1.echangeCornForGold(marchandTest2);
            marchandTest1.actualGold.should.be.above(marchandTest1.actualCorn);

            marchandTest1.actualGold.should.be.equal((marchandTest2.actualCorn - 200)/2 + 200);
            marchandTest2.actualCorn.should.be.above(marchandTest2.actualGold);
        });

        it('corn exchange ', () => {
            marchandTest1.echangeGoldForCorn(marchandTest2);
            marchandTest1.actualGold.should.be.equal((marchandTest2.actualCorn - 200)/2 + 200);
        });

    });

});