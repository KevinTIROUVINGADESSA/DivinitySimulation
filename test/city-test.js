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

        it('should update city\'s gold to 0', async() => {
            await g.giveShit();
            g.corn.should.be.equal(0);
            g.gold.should.be.equal(0);
        });

        it('should return false if corn,gold,nbMarchands or nbGuerriers is equal to 0')
        {
            let a,b,c,e;
            a = new City('a','a');
            b = new City('b','b');
            c = new City('c','c');
            e = new City('d','d');

            a.corn = 0;
            a.isAlive().should.be.equal(false);

            b.gold = 0;
            b.isAlive().should.be.equal(false);

            c.population.nbMarchand = 0;
            c.isAlive().should.be.equal(false);

            c.population.nbGuerrier = 0;
            c.isAlive().should.be.equal(false);

        }
    });
});

