import GamePlay from "../scenes/GamePlay";

export default class Enemy extends Phaser.GameObjects.Sprite {

    protected _config: genericConfig;
    protected _scene: GamePlay;
    protected _body: Phaser.Physics.Arcade.Body;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;
    private _timer: Phaser.Time.TimerEvent;
  //  private _timer: Phaser.Time.Clock;
    


    constructor(params: genericConfig) {
        super(params.scene, params.x, params.y, params.key);
        this._config = params;
        this._scene = <GamePlay>params.scene;
        this._config.scene.physics.world.enable(this);
        this._scene.add.existing(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        //this.spawnPoints = [[70, 0], [180, 0], [310, 0], [390, 0]];
        this.setName("enemy");
        this.create();
        // settiamo i tasti cursor
        
    }
    
    
    create(){ 
      this._body.setMaxVelocity(250, 550).setCollideWorldBounds(true, 0.5);
      this._body.setVelocityX(200);
      //inserire animazione
        
    }
    update(time: number, delta: number){
        //se il tasto cursore left è premuto
        
   }


}