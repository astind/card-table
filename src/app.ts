import "phaser";
import { MainMenu } from './scenes/main-menu';

const config: any = {
  title: "Card Table",
  width: 800,
  height: 600,
  parent: "game",
  backgroundColor: "#99ff99",
  scene: [MainMenu]
};


export class CardTableGame extends Phaser.Game {

  constructor(config: any) {
    super(config);
  }
}


window.onload = () => {
  const game = new CardTableGame(config);
};