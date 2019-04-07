# DivinitySimulation

Simulation of different cities ruled by divinities through javascript

# Getting Started 
Clone the project
```
git clone https://github.com/Telsho/DivinitySimulation.git
```
# Prerequisites
```
yarn install
npm install
```
# Installing
```
npm install chai
npm install --global xo
```
# Running the test
```
mocha test/*
```

#Run the simulation
```
node index.js
```


# Built With
- nodeJS

# Authors
- Carlot Alexandre
- Thouant Elias
- Tirouvingadessa Kévin

# About code
##Divinity.js
Class which define a divinity, with a name, an amount of gold/corn, a time factor and events that occurs.
Each divinity is define in the constructor of the a City.
   ### init()
   Initialize the events of the divinity, such as favor -> gives 10% more gold and corn to the city.
   blessing -> gives x100 more gold and corn to the city.
   retribution -> gives a random number of gold and corn to the city
   
   ###offeringCorn(offer)
   Takes corn from a city as an "offer", if not the city is destroyed.
   It is randomly call in the index.js.
   
   ##offeringGold(offer)
   Takes gold from a city as an "offer", if not the city is destroyed.
   It is randomly call in the index.js.
    

## City.js
Class which define each city with a name, divinity, population, corn, gold taken as arguments.
Each city is ruled by a divinity which can giveShit or getShit to/from the city.
The argument population is divided in 2 parts (number of merchant / number of warrior).
Every city will be initialize in the file index.js.
   ### fight()
  This method will make a fight between the current city and the one taken as argument.
  We create a random number between 0 and 1 which choose the attacker and the defender.
  The number of warriors attacker and defender will always be the same.
  when a warrior dies, he will be removed from the warrior array.
  If the warrior defends he cannot die and his life points will stay at 1 because of the gratefulness of the Divinity's city.
  If the attacker won he takes half of the corn and gold from the defender.
   ### trade()
  Trade between two cities
  If the number of merchant of one of those city is bigger than the other one, the smallest number of merchant is kept.
  As in fight method, we choose the trade randomly(gold for corn OR corn for gold).
  2 corns equals to 1 gold.
  The trade is made merchant per merchant.
  There's also a probability to the merchant to be attacked during the transaction, so the trade will be cancelled and the merchant will die.
   ### countTroupes()
   Scan each warriors/merchants from the city and add their price to the rez variable.
   this price(rez) is deducted from the city corn/gold.
   It costs a ratio 2 corns / 1 gold.
   The population will be annihilate if the number of corn/gold equals 0.
   ### isAlive()
   Check if the city is still able to continue, the city is destroyed if the number of merchants, warriors, the value of gold or corn equals 0.
                                                   If one of those arguments equals 0 then the method return false else it return true.
## Guerrier.js
Class which define each warriors from a city, who's defined by his age, force, HP and moral.
The initialization of them is made on population.js by Math.random() method.
The argument "prix" is used for the cost of each merchant/warrior, when you create a warrior/merchant it cost some
gold/corn to the city.
   ### decrire()
   Describe a warrior by all of his parameters(age,strength,HP,moral) and print it to the console.
      
   ### attack()
   This method takes another warrior as argument.
   If the warrior is too old/ young, his strength is decreased.
   The argument "moral" as an influence on the strength of the warrior, if his moral is up to 0.5 his
   strength is boosted else it's decreased.
   We call the recevoirDegats() method for the opponent warrior to inflict damage on him.
   We add a probability to drop the secret weapon which upgrade his strength.
   
   ### recevoirDegats()
   It takes the number of damage as arguments and reduce it from the HP of the current warrior.
   The minimum amount of HP is 0, so if HP - damage < 0 we redefine it to 0.
    
   ### estVivant()
   method which check if the warrior is alive or not by a boolean value, if HP equals 0 the warrior is dead
   else, he's alive.
   A warrior could die of old age.
   
## Marchand.js
Class which define each merchant from a city, who's defined by his age, force, HP and moral.
The initialization of them is made on population.js by Math.random() method.
   ### decrire()
   Describe a merchant by all of his parameters(actual_corn,actual_gold,max_corn,max_gold) and print it to the console.
   
   ### echange_gold_for_corn()
   Take as argument the second merchant for the trade, we calculate the max amount of corn the first merchant can exchange.
   One gold equals 2 corns.
   Then we make the trade so we deduce the amount of gold from the first merchant and we add it to the second.
   Same operation for the corns, we deduce the equivalent amount from the second merchant and add it to the first merchant.
   ### echange_corn_for_gold()
   Same as Echange_gold_for_corn() but reverse gold and corn.
   
## Population.js
Class which contains warriors and merchants in arrays, there numbers, we stock each warrior/ merchants
on it so we can delete them when they die.
   ### init()
   this method is called on the constructor of the class.
   it set the warriors/merchants by calling the constructor of those class and affecting random values to it.
   ### showPop()
   Method to print the actual population of the city, we use a timer to print the value with a certain delay.

## Index.js

File to run the simulation, we create 5 different cities and make them interact with each other.
What you have to know is that you have a probability to trade, attack or do nothing for each day.
The city dies when there is no more gold, corn, marchand or guerrier.
You also a chance to give half of your money to the divinity, and aother one to get all her the money (giveShit, getShit).
We also add some delay, which cause xo's issues.


    
