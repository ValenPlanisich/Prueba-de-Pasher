
export default class Game extends Phaser.Scene {
    constructor() {
      super("Game");
    }
  
    init() {
      let shapesRecolected =[
        {tipo: "triangulo", count: 0 },
        {tipo: "cuadrado", count: 0},
        {tipo: "rombo", count: 0},
    ];
    }
  
    preload() {
      this.load.image("sky","./assets/imagenes/Cielo.png")
      this.load.image("ninja","./assets/imagenes/Ninja.png")
      this.load.image("plataforma","./assets/imagenes/platform.png")
    }
  
    create() {
      this.add.image (400,300, "sky").setScale(0.555)
      this.player=this.physics.add.sprite(200, 100, "ninja")
      this.plataformsGroup = this.physics.add. staticGroup()
      this.plataforms.create (400, 568, "plataforma").setScale(2).refreshBody();
      this.physics.add.collider(this.player, this.plataforms)
      this.shadeGroup = this.physics.add.group()

    }
  
    update() {
    }
  }