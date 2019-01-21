import shuffle from '../shuffle.js';
import allPossibleItems from './foods.json'; 

export default function getGameItems(numToGet=8) {
    //function to get a random assortment of game items 
    //(default source is items.json)
    //by default, the game runs with 10 items, but you can specify any number
    shuffle(allPossibleItems);
    return allPossibleItems.slice(0, numToGet);
}