import "phaser";


const config: any = {
  title: "Card Table",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#18216D"
};


export class CardTableGame extends Phaser.Game {
    
  constructor(config: any) {
    super(config);
  }
}


window.onload = () => {
  const game = new CardTableGame(config);
};