import React, { Component } from 'react';
import ScoreCard from "./components/ScoreCard/";
import Instructions from "./components/Instructions/";
import ClickyImage from "./components/ClickyImage/";
import Footer from "./components/Footer/";
import GameBoard from "./components/GameBoard/";

import starterFriends from "./friends.json";

/**
 * Randomly shuffle an array
 * (Fisher-Yates algorithm)
 * https://stackoverflow.com/a/2450976/1293256
 */
function shuffle(array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { friends: shuffle(starterFriends) }
  }

  guess = (id)=> {
    //TO DO: figure out if the particular friend has been clicked before
    this.setState({friends: shuffle(starterFriends)});
  }

  render() {
    return (
      <div>
        <Instructions />
        <ScoreCard />
        <GameBoard>
          {this.state.friends.map(currentFriend => {
            return <ClickyImage key={currentFriend.id} friend={currentFriend} guess={this.guess}/>
          })}
        </GameBoard>
        <Footer />
      </div>
    );
  }
}

export default App;



