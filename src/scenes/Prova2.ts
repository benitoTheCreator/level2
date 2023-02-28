

export default class Prova2 extends Phaser.Scene {

  private _background: Phaser.GameObjects.Image;

  private _tranContainer: Phaser.GameObjects.Container;
  private _tranContainerText: Phaser.GameObjects.Text;
  private _tranContainerBg: Phaser.GameObjects.Image;
 

  constructor() {
    super({ key: "Prova2" });
  }

  create() {

    
    //background image
    this._background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,"bg");
    //setta l'immagine full screen
    let scaleX = this.cameras.main.width / this._background .width
    let scaleY = this.cameras.main.height / this._background .height
    let scale = Math.max(scaleX, scaleY)
    this._background.setScale(scale).setScrollFactor(0);

    //credits container
    this._tranContainer = this.add.container().setAlpha(1).setDepth(10);

    //transition container
    this._tranContainerBg = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,"bg1");
    //setta l'immagine full screen
    let scaleX2 = this.cameras.main.width / this._tranContainerBg .width
    let scaleY2 = this.cameras.main.height / this._tranContainerBg .height
    let scale2 = Math.max(scaleX2, scaleY2)
    this._tranContainerBg.setScale(scale2).setScrollFactor(0);

    this._tranContainerText = this.add.text(this.game.canvas.width / 2 ,100,"LIVELLO 2").setTint(0xff0000).setOrigin(.5);
    this._tranContainer.add([this._tranContainerBg, this._tranContainerText]);


    //togliamo lo sfondo della transition
    this.time.addEvent({
        delay: 500,
        loop: false,
        callback: () => {
            this.tweens.add({
                targets: this._tranContainer,
                duration: 1000,
                repeat: 0,
                alpha: 0,
                yoyo: false,
                ease: "Quad.easeInOut"
            })
        },
        callbackScope: this
    })
    


  }




  update(time: number, delta: number): void {
    
    
  }
}
