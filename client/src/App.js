import React, { Component } from "react";

import Thumbnail from './components/Thumbnail';


class App extends Component {

state = {
  tiles: [
    'https://thumbs-prod.si-cdn.com/5oOIpVMV1iL_olduP7bOfHeCTrA=/420x240/https://public-media.si-cdn.com/filer/56/4a/564a542d-5c37-4be7-8892-98201ab13180/cat-2083492_1280.jpg',
    'https://thumbs-prod.si-cdn.com/o_EQkkwoxrTd4Shp9xfriDXO--M=/420x240/filters:focal(554x699:555x700)/https://public-media.si-cdn.com/filer/a4/04/a404c799-7118-459a-8de4-89e4a44b124f/img_1317.jpg',
    'https://www.pasadenastarnews.com/wp-content/uploads/2019/04/A471529_Alice_b-1.jpg?w=467',
    'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/cat_1280p.jpg?itok=RrHAROGZ',
    'https://www.dw.com/image/42582511_401.jpg',
    'https://s.abcnews.com/images/Lifestyle/AL_scared_cat_jt_151225_16x9_992.jpg',
    'https://www.peta.org/wp-content/uploads/2017/11/iStock-805170532_absolutimages-668x336.jpg?20190103112626',
    'https://images.ctfassets.net/cnu0m8re1exe/6y85yBIxrIAGWM3rRzSI3Z/3a3a9ab9933d50d75d43129921ac540c/CatPetting_edited-2.jpg?w=650&h=433&fit=fill',
    'https://images2.minutemediacdn.com/image/upload/c_crop,h_1126,w_2000,x_0,y_0/f_auto,q_auto,w_1100/v1554928711/shape/mentalfloss/539814-istock-821264870.jpg',
  ],
  clickedTiles: [

  ]
};

shuffled = [];

shuffleTiles = () => {

}

handleTileClick = (evt) => {
  //record click
  //test for match
  //
  console.log(evt);
  const clickedImg = evt.target.src;
  const shuffled = this.state.tiles.sort(() => { return 0.5 - Math.random() });
  this.setState({tiles: shuffled})
}

  render() {
    return (
      <div className="App">
        {
        this.state.tiles.map((tile, idx) =>  <Thumbnail 
        src={tile} 
        key={idx} 
        onClick={this.handleTileClick}
        />)
        }
       
      </div>
    );
  }
}

export default App;
