export let GameData: any = {
  globals: {
    leaderboard: false,
    gameWidth: 1500,
    gameHeight: 1000,
    bgColor: "#ffffff",
    debug: false,
  },

  // preloader: {
  //   bgColor: "",
  //   image: "phaser",
  //   imageX: 512,
  //   imageY: 300,
  //   loadingText: "",
  // },

  spritesheets: [
    {
      name: "player-sheet",
      path: "assets/images/player_sheet.png",
      width: 16,
      height: 16,
      frames: 44
    },
    {
      name: "players",
      path: "assets/images/players.png",
      width: 52,
      height: 70,
      frames: 84
    },
    {
      name: "primitiveMan",
      path: "assets/images/past/npc/primitiveMan(18x18)_sheet.png",
      width: 18,
      height: 18,
      frames: 44
    },
    {
      name: "bomb",
      path: "assets/images/bomb.png",
      width: 33,
      height: 31,
      frames: 12
    },
  ],
  images: [  
    {name: "logo", path: "assets/images/logo.png"},
    {name: "bg", path: "assets/images/bg.png"},
    {name: "bg1", path: "assets/images/bg1.png"},
    {name: "bg3", path: "assets/images/bg3.png"},
    {name: "grid", path: "assets/images/grid.png"},
    {name: "ground", path: "assets/images/ground.png"},
    {name: "player", path: "assets/images/player.png"},
    {name: "enemy", path: "assets/images/enemy.png"},
    {name: "obstacle", path: "assets/images/obstacle.png"},
<<<<<<< HEAD
    {name: "macchina", path: "assets/images/macchina.jpeg"},
    {name: "vision", path: "assets/images/Vision.png"},
    {name: "wall3", path: "assets/images/wall3.png"}

=======
    {name: "macchina", path: "assets/images/macchina.jpeg"}
>>>>>>> 4138e38a59e0894266124adfcaa8c87c8feb6f3b

  ],
  atlas: [],
  sounds: [
    // {
    //   name: "welcome",
    //   paths: ["assets/sounds/welcome.mp4"],
    //   volume: 0,
    //   loop: false,
    //   frame: 1,
    // },
  ],
  audio: [],
  bitmapfont: [],
};
