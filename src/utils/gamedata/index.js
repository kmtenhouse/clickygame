import shuffle from '../shuffle.js';
import allPossibleFriends from './friends.json';

export default function getGameItems(numToGet=8) {
    //function to get a random assortment of game items 
    //(default source is friends.json)
    //by default, the game runs with 10 friends, but you can specify any number
    shuffle(allPossibleFriends);
    return allPossibleFriends.slice(0, numToGet);
}