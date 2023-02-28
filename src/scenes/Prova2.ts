import Bomb from "../components/Bomb";
import Player from "../components/Player";
import Player2 from "../components/Player2";

export default class Prova2 extends Phaser.Scene {

  private _background: Phaser.GameObjects.Image;
  private _mainCamera: Phaser.Cameras.Scene2D.Camera;

  private _tranContainer: Phaser.GameObjects.Container;
  private _tranContainerText: Phaser.GameObjects.Text;
  private _tranContainerBg: Phaser.GameObjects.Image;


  private _player: Player;
  private _playerGroup: Phaser.GameObjects.Group;
  private _enemy: Player2;
  private _enemyGroup: Phaser.GameObjects.Group;


  private _bomb: Bomb;
 

  constructor() {
    super({ key: "Prova2" });
  }

  create() {

    this._mainCamera = this.cameras.main;
    this._mainCamera.setBackgroundColor(0x000000);

    //background image
    this._background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,"bg");
    

    //imposta la larghezza della camera (due volte del canvas che è definito nel file css)
    this._mainCamera.setBounds(0,0, this.game.canvas.width * 4,  this.game.canvas.height * 4);


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
    
    //gameplay

    //player
    this._playerGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
    this._player =  new Player({scene: this, x: 550, y: 650, key: "player-sheet"}).setAlpha(1);
    this._player.setFrame(0).setScale(5);
    this._playerGroup.add(this._player);

    //nemico
    this._enemyGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
    this._enemy =  new Player2({scene: this, x: 200, y: 650, key: "players"}).setScale(1);
    this._enemyGroup.add(this._enemy);

    //collider
    this.physics.add.collider(this._player, this._enemy, () => {
      //stop movimento player
      this._player.body.velocity.x = 0;
      this._enemy.body.velocity.x = 0;

      this.time.addEvent({
        delay: 500,
        loop: false,
        callback: () => {
          this.scene.restart()
        },
          callbackScope: this
      })
    }, null, this);

    
    
    //oggetto da lanciare (implementare array  per metterne di più)
    this._bomb = new Bomb({scene: this, x: 900, y: 600, key: "bomb"}).setScale(2);

    //bomba e player
    this.physics.add.collider(this._bomb, this._player, () => {
      this._bomb.move(this._player.x - this._enemy.x);
    }, null, this);


    //bomba e nemico
    this.physics.add.collider(this._bomb, this._enemy, () => {
      this._bomb.destroy()
      this._enemy.stopMov()
      
    }, null, this);

  }




  update(time: number, delta: number): void {
    
    //setta se il player sta a terra e quindi può saltare
    if(this._player.y > 890){ //qui ho messo questo a caso aspettando di avere un ground
      this._player.setCanJump(true);
    } else {
      this._player.setCanJump(false);
    }

   
    
  }
}
