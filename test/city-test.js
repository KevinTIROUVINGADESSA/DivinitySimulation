const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const {City} = require('../city');
const {Divinity} = require('../divinity');

chai.use(chaiAsPromised);
chai.should();


describe('City.js', () => {

    let g,d;
    before(() => {
        g = new City('CityTest', 'DivinityTest');
        d = new Divinity('test', 1);
    });

    after(() => {
        d.endWorld();
    });

    describe('City methods', () => {

        it('should update city\'s corn and gold ', async() => {
            await d.offeringCorn(100);
            await d.offeringGold(100);
            d.corn.should.be.equal(100);
            d.gold.should.be.equal(100);

            await g.getShit(d);
            g.corn.should.be.equal(1100);
            g.gold.should.be.equal(1100);

            d.endWorld();

        });



    });
});

