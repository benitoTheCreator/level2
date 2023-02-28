import Enemy from "../components/Ememy";
import Player from "../components/Player";

export default class GamePlay extends Phaser.Scene {

  private _background: Phaser.GameObjects.Image;
  private _music: Phaser.Sound.BaseSound;
  private _player: Player;
  private _playerGroup: Phaser.GameObjects.Group;
  private _timer: Phaser.Time.TimerEvent;
  private _countdown: Phaser.Time.TimerEvent;
  private _enemy: Enemy;
  private _enemyGroup: Phaser.GameObjects.Group;
  private _text: Phaser.GameObjects.Text;

  constructor() {
    super({ key: "GamePlay" });
  }

  create() {

    
    //background image
    this._background = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2,"bg");
    //setta l'immagine full screen
    let scaleX = this.cameras.main.width / this._background .width
    let scaleY = this.cameras.main.height / this._background .height
    let scale = Math.max(scaleX, scaleY)
    this._background.setScale(scale).setScrollFactor(0);

    //player
    this._playerGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
    this._player =  new Player({scene: this, x: 250, y: 650, key: "player"}).setAlpha(0);
    this._playerGroup.add(this._player);

    //nemico
    this._enemyGroup = this.add.group({runChildUpdate: true}); //runChildUpdate chiama la funzione update su ogni elemento del gruppo  
    this._enemy =  new Enemy({scene: this, x: 750, y: 650, key: "enemy"}).setAlpha(0);
    this._enemyGroup.add(this._player);

    //spwan player
    this.show(this._player, 1500);

    //spwan nemico
    this._timer = this.time.addEvent({
      delay: 2000,
      callback: (item: any, duration: number) => {
        this.show(this._enemy, 1000);
      },
      callbackScope: this,
      args: [3, 20, 10], //passare argomenti alla funzione di callback
      loop: true //la fa ripetere all'infinito
    })

    this._countdown = this.time.addEvent({
      delay: 100000,
      callbackScope: this,
      args: [3, 20, 10], //passare argomenti alla funzione di callback
      loop: true //la fa ripetere all'infinito
    })
    
    
    this._text = this.add.text(150,150, "");
  }


  show(item: any, duration: number){
    this.tweens.add({
      targets: item, 
      alpha: 1,
      duration: duration,
      ease: "easeIn"
    })

  }

  update(time: number, delta: number): void {
    //distanza tra giocatore e nemico
    if(this._player.x > this._enemy.x){
      if(this._player.x - this._enemy.x < 250){
        this.scene.start("Hud");
      }
    } else {
      if(this._enemy.x - this._player.x < 250){
        this.scene.start("Hud");
      }
    }
    
    //countdown
    this._text.setText(this._countdown.getProgress().toString().substring(0,4));
  }
}
