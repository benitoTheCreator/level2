import GamePlay from "../scenes/GamePlay";

export default class Player2 extends Phaser.GameObjects.Sprite {

    protected _config: genericConfig;
    protected _scene: GamePlay;
    protected _body: Phaser.Physics.Arcade.Body;
    private _cursors: Phaser.Types.Input.Keyboard.CursorKeys;

    private _ismoving: boolean = false;
    private _canMove: boolean = false;
    private _canJump: boolean = false;

    constructor(params: genericConfig) {
        super(params.scene, params.x, params.y, params.key);
        this._config = params;
        this._scene = <GamePlay>params.scene;
        this._config.scene.physics.world.enable(this);
        this._scene.add.existing(this);
        this._body = <Phaser.Physics.Arcade.Body>this.body;
        

        this.setScale(0.2);
        this._body.setCollideWorldBounds(true);
        this._body.setImmovable(true);

        // settiamo i tasti cursore
        this._cursors = this._scene.input.keyboard.createCursorKeys();

        let _animation: Phaser.Types.Animations.Animation = {
            key: "player-running",
            frames: this.anims.generateFrameNumbers("players", { frames: [0,1,2,3,4,5,6,7] }),
            frameRate: 10,
            yoyo: false,
            repeat: -1
        };
        this.anims.create(_animation);
        this.play("player-running");

        
    }
    
    
    create(){ }

   

    stopMov(){
        this.x-=100;
    }

    update(time: number, delta: number){
        this.x+=1.8;
    }


}