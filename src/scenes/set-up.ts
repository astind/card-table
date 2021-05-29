import "phaser"

export class Setup extends Phaser.Scene {

  constructor() {
    super({
      key: "Setup"
    })
  }

  preload() {

  }

  create() {
    let center_w = this.sys.canvas.width * 0.5;
    let center_h = this.sys.canvas.height * 0.5;
    this.add.text(center_w, 100,'Game Setup', {
      font: "68px Arial Bold", color: "#000000"
    }).setOrigin();
  }

  update(time) {

  }

}