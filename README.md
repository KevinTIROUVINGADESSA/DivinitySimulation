# DivinitySimulation

Simulation of different cities ruled by divinities through javascript

#Getting Started 
```
```
#Prerequisites
```
```
#Installing
```
```
#Running the test
```
```
#Deployment
```
```
#Built With
- nodeJS

#Authors
- Carlot Alexandre
- Thouant Elias
- Tirouvingadessa Kévin

#About code
## City.js
Class which define each city with a name, divinity, population, corn, gold taken as arguments
Every city will be initialize in the file index.js
   ### figth()
  This function will make a fight between the current city and the one taken as argument
  We create a random number between 0 and 1 which choose the attacker and the defender
  the number of warriors attacker and defender will always be the same
  when a warrior dies, he will be removed from the warrior array
   ### trade()
  Trade between two cities
  If the number of merchant of one of those city is bigger than the other one, the smallest number of merchant is kept
  As in fight function, we choose the trade randomly(gold for corn OR corn for gold)
  The trade is made merchant per merchant
## Guerrier.js
Class which define each warriors from a city, who's defined by his age, force, HP and moral
   ### Decrire()
   Describe a warrior by all of his parameters(age,force,HP,moral)
   
   ### Attack()
   
   ### recevoirDegats()
    
   ### estVIvant()
   
## marchand.js
    
   ### Decrire()
   
   ### Echange_gold_for_corn()
   
   ### Echange_corn_for_gold()
   
   ### get_corn()
   
   ### get_gold()

## population.js
    
   ### init()
   
   ### showPop()
   
   ### reviveGue()
   
   ### popOver()