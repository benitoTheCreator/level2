import Player2 from "../components/Player2";
import Player from "../components/Player3";
import enemy from "../components/Player3";

export default class Prova extends Phaser.Scene {

  private _background: Phaser.GameObjects.Image;
  private _player2: Player2;
  private _player: Player;
  private _enemy : enemy;
  private _playerGroup: Phaser.GameObjects.Group;
  private _enemyGroup: Phaser.GameObjects.Group;
  private _timer: Phaser.Time.TimerEvent;
  private _machine: Phaser.GameObjects.Image;

  constructor() {
    super({ key: "Prova" });
  }

  create() {

    
    //background image
    this._background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,"bg");
    //setta l'immagine full screen
    let scaleX = this.cameras.main.width / this._background .width
    let scaleY = this.cameras.main.height / this._background .height
    let scale = Math.max(scaleX, scaleY)
    this._background.setScale(scale).setScrollFactor(0);

    this.cameras.main.setBounds(0,0, this.game.canvas.width * 2,  this.game.canvas.height * 2);

    //player
    
    this._playerGroup = this.add.group({runChildUpdate: true});
    this._player =  new Player({scene: this, x: 0, y: 0, key: "player"}).setAlpha(1);
    
    this._enemy =  new enemy({scene: this, x: 200, y: 0, key: "enemy"}).setAlpha(0);
    this._enemyGroup.add(this._enemy);
    this.physics.add.collider(
      this._player,
      this._enemy,
      () => {
        //inserire rimozione di una vita come negli altri livelli
        this.removeEnemy(this._enemy);
      },
      undefined,
      this
    );

    //macchina del tempo
   // this._machine = this.physics.add.image(1500,600, "macchina").setScale(0.3).setCollideWorldBounds(true);

    //collider
    this.physics.add.collider(this._player, this._machine, () => {
        this.panTo();
        this.zoomTo();
        this.time.addEvent({
            delay: 1200,
            loop: false,
            callback: () => {
                this.scene.start("Prova2")
            },
            callbackScope: this
        })
    }, null, this);


  }
  removeEnemy(enemy: enemy) {
    this._enemyGroup.remove(enemy, true, true);
  }
  //la camera si muove al punto che abbiamo descritto
  panTo(){
    this.cameras.main.pan(
        1500, //x
        500, //y
        100, //duration
        "Sine.easeInOut", //ease function
        true, // force
        (camera: Phaser.Cameras.Scene2D.Camera, progress: number) => {
          if (progress === 1) { console.log("pan completed"); }
        }, //callback
        this //callback context
      );      
}

    //zooma la camera
    zoomTo(){
        this.cameras.main.zoomTo(
            1.5, //valore dello zoom
            100, //duration
            "Sine.easeInOut", //ease function
            true, // force
            (camera: Phaser.Cameras.Scene2D.Camera, progress: number) => {
                if (progress === 1) { 
                }
            }, //callback
            this //callback context
        );
    
    }



  update(time: number, delta: number): void {
   
    
  }
}
