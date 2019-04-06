const {Divinity} = require('./divinity');
const {Population} = require('./population');
const {City} = require('./city');

f = new City('Fellatio', 'Chibrax');
c = new City('Cunnilingi', 'Fouff');
a = new City('Analum', 'Trou');
b = new City('Bobilae', 'Nene');
g = new City('Extraterum', 'ET');
let villes = [f, c];

for (let i = 0; i < villes.length; i++)
{
    villes[i].showShit();
    var now = new Date().getTime();
    while(new Date().getTime() < now + 5000) { }
}
