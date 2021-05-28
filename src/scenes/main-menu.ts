import "phaser";
import { env } from '../env/env'; 


export class MainMenu extends Phaser.Scene {

  constructor() {
    super({
      key: "MainMenu"
    });
  }

  init(params): void {
    // TODO
  }

  preload(): void {
    // TODO
  }

  create(): void {
    // TODO
    let w_center = (env.s_width / 2);
    let h_center = (env.s_height / 2);
    let title = this.add.text(w_center, 200, "Card Table", {
      font: "68px Arial Bold", color: "#000000"
    }).setOrigin();

    let box_style = {
      fontSize: '42px',
      fontFamily: 'Arial',
      color: '#ffffff',
      backgroundColor: '#669999',
    }

    let start_box = this.add.text(w_center, h_center, "Start Game", box_style).setPadding(12, 20).setOrigin().setInteractive();
    let settings_box = this.add.text(w_center, (h_center + 150), "Settings", box_style).setPadding(42, 20).setOrigin().setInteractive();

    start_box.on("pointerover", this.onHover(start_box));
    start_box.on("pointerout", this.exitHover(start_box));
    start_box.on("pointerdown", function () {
      console.log("go to game page");
    });

    settings_box.on("pointerover", this.onHover(settings_box));
    settings_box.on("pointerout", this.exitHover(settings_box));
    settings_box.on("pointerdown", function () {
      console.log('go to settings page');
    })

  }

  update(time): void {
    // TODO
  }


  onHover(textObj: Phaser.GameObjects.Text): () => void {
    return function() {
      textObj.setBackgroundColor("#e0ebeb");
      textObj.setColor("#000000");
    }
  }

  exitHover(textObj: Phaser.GameObjects.Text): () => void {
    return function () {
      textObj.setBackgroundColor("#669999");
      textObj.setColor("#ffffff");
    }
  }

};