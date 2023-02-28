export default class Intro extends Phaser.Scene {

  private _music: Phaser.Sound.BaseSound;
  private _backgroundImg: Phaser.GameObjects.Image;
  private _playBtn: Phaser.GameObjects.BitmapText;
  private _chooseCharacter: Phaser.GameObjects.BitmapText;
  private _credits: Phaser.GameObjects.BitmapText;

  constructor() {
    super({
      key: "Intro",
    });


  }

  preload() {


  }
  create() {

    
    // //background image
    // this._backgroundImg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,"fight-club2");
    // //setta l'immagine full screen
    // let scaleX = this.cameras.main.width / this._backgroundImg .width
    // let scaleY = this.cameras.main.height / this._backgroundImg .height
    // let scale = Math.max(scaleX, scaleY)
    // this._backgroundImg.setScale(scale).setScrollFactor(0);

    // //background music
    // this._music = this.sound.add("welcome");
    // this._music.play(undefined, {
    //   loop: true,
    //   volume: 0.03,
    // });

    //character choise
    this._chooseCharacter = this.add
      .bitmapText((this.game.canvas.width / 2) - 360, 800, "arcade", "Scegli Personaggio", 30, 2)
      .setAlpha(1)
      .setDepth(1001)
      .setOrigin(0.5, 1).setInteractive().on("pointerdown", () => {
        this.scene.start("Character");
        this._music.stop();
      });

  }


  update(time: number, delta: number): void {


    // this._logo.rotation += .01;

  }

}

