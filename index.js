const {Divinity} = require('./divinity');
const {Population} = require('./population');
const {City} = require('./city');

f = new City('Fellatio', 'Chibrax');
c = new City('Cunnilingi', 'Fouff');
a = new City('Analum', 'Traoum');
b = new City('Bobilae', 'Nene');
g = new City('Branleum', 'Mano');
let villes = [f, c];

for (let i = 0; i < villes.length; i++) {
    villes[i].showShit();
    if (i == 0) {
        villes[i].trade(villes[i + 1]);
        let now = new Date().getTime();
        while(new Date().getTime() < now + 5000) { }
        villes[i].fight(villes[i +1]);
    }
}