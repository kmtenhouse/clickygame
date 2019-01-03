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
    this.state = {
      friends: shuffle(starterFriends),
      currentScore: 0,
      bestScore: 0
    };
  }

  guess = (id) => {
    //First, find exactly the right friend within our state array (based on the id of the element they clicked)
    const friendIndex = this.state.friends.findIndex(eachFriend => eachFriend.id === id);
    const friendInQuestion = this.state.friends[friendIndex];

    //if we haven't previously clicked this friend, we get a point added to our score!
    if (!friendInQuestion.isClicked) {
      friendInQuestion.isClicked = true;
      let newScore = this.state.currentScore + 1;
      this.setState({
        currentScore: newScore,
        friends: shuffle(starterFriends)
      });
    }
    //Otherwise, it's a repeat...and the game starts over :)
    else {
      //first, check if our previous score beat our record
      const newHiScore = (this.state.currentScore > this.state.bestScore ? this.state.currentScore : this.state.bestScore);
      //then quickly reset the clicks for everyone
      starterFriends.forEach(element => {
        element.isClicked=false;
      });
      this.setState({
        currentScore: 0,
        bestScore: newHiScore,
        friends: shuffle(starterFriends)
      });
    }

  }

  render() {
    return (
      <div>
        <Instructions />
        <ScoreCard currentScore={this.state.currentScore} bestScore={this.state.bestScore}/>
        <GameBoard>
          {this.state.friends.map(currentFriend => {
            return <ClickyImage key={currentFriend.id} friend={currentFriend} guess={this.guess} />
          })}
        </GameBoard>
        <Footer />
      </div>
    );
  }
}

export default App;



