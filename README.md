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
   ### figth()
  This method will make a fight between the current city and the one taken as argument
  We create a random number between 0 and 1 which choose the attacker and the defender
  the number of warriors attacker and defender will always be the same
  when a warrior dies, he will be removed from the warrior array
   ### trade()
  Trade between two cities
  If the number of merchant of one of those city is bigger than the other one, the smallest number of merchant is kept
  As in fight method, we choose the trade randomly(gold for corn OR corn for gold)
  The trade is made merchant per merchant
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
   
## Marchand.js
Class which define each merchant from a city, who's defined by his age, force, HP and moral
The initialization of them is made on population.js by Math.random() method
   ### Decrire()
   Describe a merchant by all of his parameters(actual_corn,actual_gold,max_corn,max_gold) and print it to the console

   ### Echange_gold_for_corn()
   
   ### Echange_corn_for_gold()
   
   ### get_corn()
   
   ### get_gold()

## Population.js
    
   ### init()
   
   ### showPop()
   
   ### reviveGue()
   
   ### popOver()