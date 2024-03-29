const {City} = require('./city');

const f = new City('Fellatio', 'Chibrax');
const c = new City('Cunnilingi', 'Fouff');
const a = new City('Analum', 'Traoum');
const b = new City('Bobilae', 'Nene');
const g = new City('Branleum', 'Mano');
let now;
const cities = [f, c, a, b, g];

const setUp = (city, i) => {
  city[i].showShit();
  city[i].init();
};

const gameOn = (city, i) => {
  console.log('---------- The day start in ' + city[i].name + '----------');
  city[i].divinity.init();
  city[i].showShit();
  if (Math.random() <= 0.2) {
    console.log(
      'The divinity ' + city[i].divinity.name + ' have been grateful today !'
    );
    city[i].getShit(city[i].divinity);
  }

  const whatToDoToday = Math.random();

  now = new Date().getTime();
  while (new Date().getTime() < now + 500) {}

  if (whatToDoToday <= 0.3) {
    let whichCity = Math.floor(Math.random() * city.length);

    while (whichCity === i) {
      whichCity = Math.floor(Math.random() * city.length);
    }

    console.log('Today we will attack ' + city[whichCity].name);
    city[i].fight(city[whichCity]);
  } else if (whatToDoToday <= 0.6 && whatToDoToday >= 0.31) {
    let whichCity = Math.floor(Math.random() * city.length);

    while (whichCity === i) {
      whichCity = Math.floor(Math.random() * city.length);
    }

    console.log('Today we will trade with  ' + city[whichCity].name);
    city[i].trade(city[whichCity]);
  } else {
    console.log("Let's do nothing for today.");
  }

  city[i].countTroupes();

  if (Math.random() <= 0.5) {
    console.log(
      'The divinity ' + city[i].divinity.name + ' wants offrands !!!'
    );
    city[i].giveShit();
  }
};

for (let i = 0; i < cities.length; i++) {
  setUp(cities, i);
}

let j = 0;
let condition = true;

while (condition) {
  now = new Date().getTime();
  while (new Date().getTime() < now + 500) {}
  j++;
  console.log('---------- DAY ' + j + '----------');
  console.log('Remaining cities : ' + cities.length);
  for (let i = 0; i < cities.length; i++) {
    gameOn(cities, i);

    if (!cities[i].isAlive()) {
      console.log(
        'Unfortunately the city ' +
          cities[i].name +
          ' is not with us anymore...'
      );
      cities.splice(i, i);
    }

    now = new Date().getTime();
    while (new Date().getTime() < now + 500) {}
  }

  if (cities.length === 1) {
    console.log('**********************************');
    console.log('The game is oveeeeer, city ' + cities[0].name + ' WON !');
    console.log('Here are the stats : ');
    cities[0].showShit();
    condition = false;
  }
}
