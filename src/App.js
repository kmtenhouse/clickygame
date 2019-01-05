import React from 'react';

//Page components 
import ScoreCard from "./components/ScoreCard/";
import Instructions from "./components/Instructions/";
import ClickyImage from "./components/ClickyImage/";
import Footer from "./components/Footer/";
import GameBoard from "./components/GameBoard/";

//Utility functions and starter data
import shuffle from "./utils/shuffle.js";
import getGameItems from "./utils/gamedata/";

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      friends: getGameItems(10), //default is 10 items in our game
      currentScore: 0,
      bestScore: 0
      //(TO-DO): add a maxscore
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
        friends: shuffle(this.state.friends.slice(0)) 
        //NOTE: we have to make a shallow copy of the array in order to shuffle, bc the shuffle function directly mutates the array it is operating on. And react doesn't like data in the 'state' to be modified outside of setState. Since slice provides a shallow copy of the original array though, the objects inside the slice still point to the original objects no problem
      });
    }
    //Otherwise, it's a repeat...and the game starts over :)
    else {
      //first, check if our previous score beat our record
      //if so, make this score our new BEST SCORE
      const newHiScore = (this.state.currentScore > this.state.bestScore ? this.state.currentScore : this.state.bestScore);
      //(TO-DO) Check if we've hit the best possible score (our maxscore) -- offer the user the option to select a new random assortment of friends and start over
      //then quickly reset the clicks for everyone
      this.state.friends.forEach(element => {
        element.isClicked=false;
      });
      this.setState({
        currentScore: 0,
        bestScore: newHiScore,
        friends: shuffle(this.state.friends.slice(0))
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



