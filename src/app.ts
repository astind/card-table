import "phaser";
import { MainMenu } from './scenes/main-menu';
import { Setup } from './scenes/set-up';
import { env } from './env/env'; 

const config: any = {
  title: "Card Table",
  type: Phaser.AUTO,
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1600,
    height: 900,
  },
  backgroundColor: "#008000",
  scene: [MainMenu, Setup]
};


export class CardTableGame extends Phaser.Game {

  constructor(config: any) {
    super(config);
  }
}


window.onload = () => {
  const game = new CardTableGame(config);
};