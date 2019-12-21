import React, { Component } from "react";

import Thumbnail from './components/Thumbnail';
import Score from './components/Score';

class App extends Component {

  state = {
    tiles: [
      '/img/cat1.jpg',
      '/img/cat2.jpg',
      '/img/cat3.jpg',
      '/img/cat4.jpg',
      '/img/cat5.jpg',
      '/img/cat6.jpg',
      '/img/cat7.jpg',
      '/img/cat8.jpg',
      '/img/cat9.jpg',
    ],

    score: 0,
    topScore: 0,
  };

  clickedTiles = [
  ];


  handleTileClick = (evt) => {

    console.log(evt);
    const clickedTile = evt.target.src;

    if (this.clickedTiles.includes(clickedTile)) {
      this.clickedTiles.length = 0;
      this.setState({ score: 0 });


      return;
    }

    const newScore = this.state.score + 1;
    const topScore = newScore > this.state.topScore ?
      newScore :
      this.state.topScore;

    this.clickedTiles.push(clickedTile);

    const shuffled = this.state.tiles.sort(() => { return 0.5 - Math.random() });
    this.setState({
      tiles: shuffled,
      score: newScore,
      topScore: topScore
    });
  }

  render() {
    return (
      <div className="App">
        <Score score={this.state.score} topScore={this.state.topScore} />
        {
          this.state.tiles.map((tile, idx) => <Thumbnail
            src={tile}
            key={idx}
            onClick={this.handleTileClick}
          />)
        }
      </div>
    );
  };

};  

export default App;
