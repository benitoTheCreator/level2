import Player from "../components/Player";

export default class Hud extends Phaser.Scene {

  private _mainCamera: Phaser.Cameras.Scene2D.Camera;
  private _player: Player;
  private _playerGroup: Phaser.GameObjects.Group;
  private _ground: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  private _obstacle: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

  constructor() {
    super({
      key: "Hud",
    });
  }

  preload() { }

  create() {
    this._mainCamera = this.cameras.main;
    this._mainCamera.setBackgroundColor(0x000000);

    this.add.image(0,140,"grid").setOrigin(0);
    this.add.image(1024,140,"grid").setOrigin(0);


    this._playerGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
    this._player =  new Player({scene: this, x: 550, y: 650, key: "player-sheet"}).setAlpha(1).setDepth(3);
    this._player.setFrame(0).setScale(5);
    this._playerGroup.add(this._player);

    //ground
    this._ground = this.physics.add.image(0,1100,"ground").setOrigin(0)
    this._ground.body.allowGravity = false;
    this._ground.body.setImmovable(true)

    
    this.physics.add.collider(this._ground, this._player, (obj1: any, obj2: any) => {

    }, null, this);
    


    this._mainCamera.setBounds(0,0, this.game.canvas.width * 2,  this.game.canvas.height * 2);
    this._mainCamera.startFollow(this._player, true, 0.05, 0.05);
    this._mainCamera.setLerp(1,0);


    //ostacolo
    this._obstacle = this.physics.add.image(1200,1000, "obstacle").setImmovable(true);
    this._obstacle.body.allowGravity = false;

    

    this.physics.add.collider(this._obstacle, this._player, (obj1: any, obj2: any) => {

    }, null, this);


    let obstacle2 = this.physics.add.image(1500,800, "obstacle").setImmovable(true);
    obstacle2.body.allowGravity = false;

    

    this.physics.add.collider(obstacle2, this._player, (obj1: any, obj2: any) => {
      
      
    }, null, this);


  }


  update(time: number, delta: number): void {
      
   
    if(this._player.y > 890){ //qui ho messo questo a caso aspettando di avere un ground
      this._player.setCanJump(true);
    } else {
      this._player.setCanJump(false);
    }

    
    
    
  }

}
