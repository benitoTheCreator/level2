import GamePlay from "../scenes/GamePlay";
import Prova from "../scenes/Prova";

export default class Player extends Phaser.GameObjects.Sprite  {
 

  private _config: genericConfig;
  private _scene: Prova;
  public _body: Phaser.Physics.Arcade.Body;
  private _direction: string;
  private _w: Phaser.Input.Keyboard.Key;

  private _s: Phaser.Input.Keyboard.Key;



  constructor(params: genericConfig) {
    super(params.scene, params.x, params.y, params.key);
  
    this._config = params;
  
    this._scene = <Prova>params.scene;
 
    this._scene.physics.world.enable(this);
 
    this._body = <Phaser.Physics.Arcade.Body>this.body;

    this._scene.add.existing(this);
    this._w = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    
    this._s = this._scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    
    this._body
      .setCollideWorldBounds(true, 0.5)
      .setImmovable(true) 
      .setMaxVelocity(250, 550);

    this.setScale(0.2);

  }

  update(time: number, delta: number) {
    this.setFlipX(true);

    console.log(this._body.velocity);
    
    if(this._w.isDown){
      this._body.setVelocityY(-400);
      this._direction = "up";
      
    }
    else if(this._s.isDown){
        
            this._body.setVelocityY(400);
            this._direction = "up";
            
        } else {
      this._body.setVelocityY(0);
      this._body.setVelocityX(0);
      
      this._direction = "none";
      
    }

  }
    
   

}

  
