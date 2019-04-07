# DivinitySimulation

Simulation of different cities ruled by divinities through javascript

# Getting Started 
```
```
# Prerequisites
```
```
# Installing
```
```
# Running the test
```
```
# Deployment
```
```
# Built With
- nodeJS

# Authors
- Carlot Alexandre
- Thouant Elias
- Tirouvingadessa Kévin

# About code
## City.js
Class which define each city with a name, divinity, population, corn, gold taken as arguments
Every city will be initialize in the file index.js
   ### fight()
  This method will make a fight between the current city and the one taken as argument
  We create a random number between 0 and 1 which choose the attacker and the defender
  the number of warriors attacker and defender will always be the same
  when a warrior dies, he will be removed from the warrior array
   ### trade()
  Trade between two cities
  If the number of merchant of one of those city is bigger than the other one, the smallest number of merchant is kept
  As in fight method, we choose the trade randomly(gold for corn OR corn for gold)
  The trade is made merchant per merchant
  There's also a probability that the merchant be attacked during the transaction, so the trade will be cancelled
   ### cout_troupes()
   Scan each warriors/merchants from the city and add their price to the rez variable
   this price(rez) is deducted from the city corn/gold
   It costs a ratio 2 corns / 1 gold 
   The population will be annihilate if the number of corn/gold equals 0
## Guerrier.js
Class which define each warriors from a city, who's defined by his age, force, HP and moral
The initialization of them is made on population.js by Math.random() method
   ### Decrire()
   Describe a warrior by all of his parameters(age,strength,HP,moral) and print it to the console
      
   ### Attack()
   This method takes another warrior as argument
   If the warrior is too old/ young, his strength is decreased
   The argument "moral" as an influence on the strength of the warrior, if his moral is up to 0.5 his
   strength is boosted else it's decreased
   We call the recevoirDegats() method for the opponent warrior to inflict damage on him
   We add a probability to drop the secret weapon which upgrade his strength
   
   ### recevoirDegats()
   It takes the number of damage as arguments and reduce it from the HP of the current warrior
   The minimum amount of HP is 0, so if HP - damage < 0 we redefine it to 0  
    
   ### estVivant()
   method which check if the warrior is alive or not by a boolean value, if HP equals 0 the warrior is dead
   else, he's alive
   A warrior could die of old age
   
## Marchand.js
Class which define each merchant from a city, who's defined by his age, force, HP and moral
The initialization of them is made on population.js by Math.random() method
   ### Decrire()
   Describe a merchant by all of his parameters(actual_corn,actual_gold,max_corn,max_gold) and print it to the console
   
   ### Echange_gold_for_corn()
   Take as argument the second merchant for the trade, we calculate the max amount of corn the first merchant can exchange
   One gold equals 2 corns
   Then we make the trade so we deduce the amount of gold from the first merchant and we add it to the second
   Same opération for the corns, we deduce the equivalent amount from the second merchant and add it to the first merchant.
   ### Echange_corn_for_gold()
   Same as Echange_gold_for_corn() but reverse gold and corn
   ### get_corn()
   Accessor of corn, get the actual merchant corn
   
   ### get_gold()
   Accessor of gold, get the actual merchant gold
   
## Population.js
    
   ### init()
   this method is called on the constructor of the class
   it set the warriors/merchants by calling the constructor of those class and affecting random values to it
   ### showPop()
   Method to print the actual population of the city, we use a timer to print the value with a certain delay
   ### reviveGue()
   
   ### popOver()

## Index.js

   ### 