const {Divinity} = require('./divinity');
const {Population} = require('./population');
const {City} = require('./city');

f = new City('Fellatio', 'Chibrax');
c = new City('Cunnilingi', 'Fouff');
a = new City('Analum', 'Trou');
b = new City('Bobilae', 'Nene');
g = new City('Extraterum', 'ET');
var villes = [f,c,a,b,g];

for (var i = 0; i < villes.length; i++)
{
    villes[i].showShit()
}
