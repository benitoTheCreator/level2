import Player2 from "../components/Player2";
import Player from "../components/Player";

export default class Prova extends Phaser.Scene {

  private _background: Phaser.GameObjects.Image;
  private _player2: Player2;
  private _player: Player;
  private _playerGroup: Phaser.GameObjects.Group;
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
    this._playerGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
    this._player =  new Player({scene: this, x: 250, y: 650, key: "player-sheet"}).setAlpha(1);
    this._player.setFrame(0).setScale(5);
    this._playerGroup.add(this._player);

    //macchina del tempo
    this._machine = this.physics.add.image(1500,600, "macchina").setScale(0.3).setCollideWorldBounds(true);

    //collider
    this.physics.add.collider(this._player, this._machine, () => {
      //stop movimento player
      this._player.body.velocity.x = 0;

      //zoom sulla navicella
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


    //setta se il player sta a terra e quindi può saltare
    if(this._player.y > 890){ //qui ho messo questo a caso aspettando di avere un ground
      this._player.setCanJump(true);
    } else {
      this._player.setCanJump(false);
    }
    
  }
}
