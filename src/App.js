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

//Global variables
let allGameItems = getGameItems(10);

class App extends React.Component {  
  constructor(props) {
    super(props);
    this.state = {
      friends: shuffle(allGameItems),
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
        friends: shuffle(allGameItems)
      });
    }
    //Otherwise, it's a repeat...and the game starts over :)
    else {
      //first, check if our previous score beat our record
      const newHiScore = (this.state.currentScore > this.state.bestScore ? this.state.currentScore : this.state.bestScore);
      //then quickly reset the clicks for everyone
      allGameItems.forEach(element => {
        element.isClicked=false;
      });
      this.setState({
        currentScore: 0,
        bestScore: newHiScore,
        friends: shuffle(allGameItems)
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



