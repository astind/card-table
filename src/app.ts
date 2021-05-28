import "phaser";
import { MainMenu } from './scenes/main-menu';
import { env } from './env/env'; 

const config: any = {
  title: "Card Table",
  type: Phaser.AUTO,
  width: env.s_width,
  height: env.s_height,
  parent: "game",
  backgroundColor: "#008000",
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