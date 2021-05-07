import "phaser";

export class MainMenu extends Phaser.Scene {

  title: Phaser.GameObjects.Text;

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
    this.title = this.add.text(200, 15, "Card Table", {
      font: "68px Arial Bold", color: "#000000"
    });

  }

  update(time): void {
    // TODO
  }
};