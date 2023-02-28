import GamePlay from "../scenes/GamePlay";

export default class Bomb extends Phaser.GameObjects.Sprite {

    protected _config: genericConfig;
    protected _scene: GamePlay;
    protected _body: Phaser.Physics.Arcade.Body;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    constructor(params: genericConfig) {
        super(params.scene, params.x, params.y, params.key);
        this._config = params;
        this._scene = <GamePlay>params.scene;
        this._config.scene.physics.world.enable(this);
        this._scene.add.existing(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        

        this._body.setCollideWorldBounds(true);
        // settiamo i tasti cursore
        this._cursors = this._scene.input.keyboard.createCursorKeys();
    }
    
    
    create(){ }

    move(x: number){
        this._body.setVelocityX(-x);
    }
    update(time: number, delta: number){

    }


}