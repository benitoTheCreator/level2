import Player from "../components/Player";
import Enemy from "../components/Ememy";

export default class Livello3 extends Phaser.Scene {

    private _mainCamera: Phaser.Cameras.Scene2D.Camera;
    private _player: Player;
    private _playerGroup: Phaser.GameObjects.Group;
    private _ground: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
    private _obstacle: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;

    private playerTouchingGround: boolean = false;


    constructor() {
      super({
        key: "Livello3",
      });
    }
  
    create() {
        
        this._mainCamera = this.cameras.main;
        this._mainCamera.setBackgroundColor(0x000000);
    
        this.add.image(0,140,"bg3").setOrigin(0);
<<<<<<< HEAD
        this.add.image(0,1340,"bg3").setOrigin(0);
        this.add.image(0,2640,"bg3").setOrigin(0);
=======
        this.add.image(1500,140,"bg3").setOrigin(0);
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
    
    
        this._playerGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
        this._player =  new Player({scene: this, x: 350, y: 650, key: "player-sheet"}).setAlpha(1).setDepth(3);
<<<<<<< HEAD
        
=======
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
        this._player.setFrame(0).setScale(5);
        this._playerGroup.add(this._player);
    
        //ground
<<<<<<< HEAD
        this._ground = this.physics.add.image(0,5000,"ground").setOrigin(0)
=======
        this._ground = this.physics.add.image(0,1100,"ground").setOrigin(0)
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
        this._ground.body.allowGravity = false;
        this._ground.body.setImmovable(true)
    
        
        this.physics.add.collider(this._ground, this._player, (obj1: any, obj2: any) => {
    
        }, null, this);
        
    
        //camera settings
<<<<<<< HEAD
        this._mainCamera.setBounds(0,0, this.game.canvas.width,  this.game.canvas.height * 4);
        this._mainCamera.startFollow(this._player, true, 0.05, 0.05);
        this._mainCamera.setLerp(0,1);
=======
        this._mainCamera.setBounds(0,0, this.game.canvas.width * 2,  this.game.canvas.height * 2);
        this._mainCamera.startFollow(this._player, true, 0.05, 0.05);
        this._mainCamera.setLerp(1,0);
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
        
        //spawn nemici
        this.time.addEvent({
            delay: 1000,
            loop: false,
            callback: () => {
                this.spawnNemici()
            },
            callbackScope: this
        })


<<<<<<< HEAD
       this.spawnPiattaforme()
=======
        //piattaforme
        this.spawnPiattaforme()
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
      
        
      

        
    }

    spawnNemici(){

        const nemici = [
            {x: 100, y: 950},
<<<<<<< HEAD
            {x: 850, y: 1300},
            {x: 1100, y: 1600},
            {x: 350, y: 2000},
            {x: 500, y: 2500},
=======
            {x: 650, y: 950},
            {x: 1100, y: 950},
            {x: 1450, y: 950},
            {x: 1950, y: 950},
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
        ]

        nemici.forEach(nemico => {
            let enemy = new Enemy({scene: this, x: nemico.x, y: nemico.y, key: "primitiveMan"})
<<<<<<< HEAD
            
            let cono = this.physics.add.image(nemico.x + 70, nemico.y + 20, "vision").setAlpha(0.5).setScale(0.4).setSize(130, 150);
            cono.body.setImmovable()
            cono.body.allowGravity = false
            cono.rotation+=1;

            this.physics.add.collider(cono, this._player, (obj1: any, obj2: any) => {
                this.scene.restart()
=======
            this.physics.add.collider(this._ground, enemy, (obj1: any, obj2: any) => {
    
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
            }, null, this);


            this.time.addEvent({
                delay: 1000,
                loop: false,
                callback: () => {
                    enemy.setFrame(21);
                    //back and forth
                    this.tweens.add({
                        x: nemico.x + 100,
<<<<<<< HEAD
                        targets: [enemy],
                        duration: 4000,
                        repeat: -1,
                        yoyo: true,
                        ease: "Linear"        
                    })
                    this.tweens.add({
                        x: nemico.x + 170,
                        targets: cono,
                        duration: 4000,
                        repeat: -1,
                        yoyo: true,
                        ease: "Linear"        
=======
                        targets: enemy,
                        duration: 4000,
                        repeat: -1,
                        yoyo: true,
                        ease: "Linear",
                        onUpdate: (tween: Phaser.Tweens.Tween) => {
                            console.log(tween.progress);
                        },            
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
                    })
                },
                callbackScope: this
            })
        })

    }
  

    spawnPiattaforme(){
        const piattaforme = [
<<<<<<< HEAD
            {x: 550, y: 700},
            {x: 1000, y: 1200},
            {x: 200, y: 1600},
            {x: 800, y: 1600},
=======
            {x: 550, y: 900},
            {x: 1000, y: 750},
            {x: 2050, y: 900},
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b

        ]

        piattaforme.forEach(piattaforma => {
<<<<<<< HEAD
            let obstacle = this.physics.add.image(piattaforma.x, piattaforma.y, "wall3").setImmovable(true);
            obstacle.body.allowGravity = false;
            obstacle.setSize(26, 300);

            this.physics.add.collider(this._player, obstacle, (obj1: any, obj2: any) => {
=======
            let obstacle = this.physics.add.image(piattaforma.x, piattaforma.y, "obstacle").setImmovable(true);
            obstacle.body.allowGravity = false;

            this.physics.add.collider(obstacle, this._player, (obj1: any, obj2: any) => {

>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
            }, null, this);
        })
    }

    update(time: number, delta: number): void {

<<<<<<< HEAD
        
=======
        //setta se il player sta a terra e quindi può saltare
        if(this._player.y > 890){ //qui ho messo questo a caso aspettando di avere un ground
            this._player.setCanJump(true);
        } else {
            this._player.setCanJump(false);
        }
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b
    }
  
}
  