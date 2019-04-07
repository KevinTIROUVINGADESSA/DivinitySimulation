const {Divinity} = require('./divinity');
const {Population} = require('./population');
const {City} = require('./city');
const EventEmitter = require('events');



f = new City('Fellatio', 'Chibrax');
c = new City('Cunnilingi', 'Fouff');
a = new City('Analum', 'Traoum');
b = new City('Bobilae', 'Nene');
g = new City('Branleum', 'Mano');
let cities = [f, c, a, b, g];

const setUp = (city,i) => {
    city[i].showShit();
    city[i].init();
};

const gameOn = (city,i) => {
    console.log('---------- The day start in ' + city[i].name + '----------');
    city[i].divinity.init();
    city[i].showShit();
    if(Math.random() <= 0.2) {
        console.log("The divinity " + city[i].divinity.name + " have been grateful today !");
        city[i].getShit(city[i].divinity);
    }

    let whatToDoToday = Math.random();

    if(whatToDoToday <= 0.3) {
        let whichCity = Math.floor((Math.random()*city.length ));

        while(whichCity === i){
            whichCity = Math.floor((Math.random()*city.length))
        }

        console.log('Today we will attack ' + city[whichCity].name);
        city[i].fight(city[whichCity]);
    }
    else if(whatToDoToday <= 0.6 && whatToDoToday >= 0.31) {
        let whichCity = Math.floor((Math.random()*city.length));

        while(whichCity === i) {
            whichCity = Math.floor((Math.random()*city.length))
        }

        console.log('Today we will trade with  ' + city[whichCity].name);
        city[i].trade(city[whichCity]);
    }
    else {
        console.log("Let's do nothing for today.");
    }


    city[i].cout_troupes();

    if (Math.random() <= 0.5) {
        console.log("The divinity " + city[i].divinity.name + " wants offrands !!!");
        city[i].giveShit();
    }
};

for (let i = 0; i < cities.length; i++) {
    setUp(cities,i);
}

let j = 0;
let condition = 1;

while (condition) {
    j++;
    console.log('---------- DAY ' + j + "----------");
    for (let i = 0; i < cities.length; i++) {

        gameOn(cities,i);

        if(!cities[i].isAlive()) {
            console.log("Unfortunately the city " + cities[i].name + " is not with us anymore...");
            cities.splice(i);
            break;
        }
    }

    if(cities.length === 1) {
        console.log("The game is oveeeeer, city " + cities[0].name + "WON !");
        console.log("Here are the stats : ");
        cities[0].showShit();
        condition = 0;
    }
}
