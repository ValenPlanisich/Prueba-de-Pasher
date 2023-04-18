
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
      this.load.image("triangle","./assets/imagenes/Triangulo.png")
    }
    create() {
      this.add.image (400,300, "sky").setScale(0.555)
      this.player=this.physics.add.sprite(400, 100, "ninja")
      this.plataformsGroup = this.physics.add. staticGroup()
      this.plataformsGroup.create(400, 568, "plataforma").setScale(2).refreshBody();
      this.physics.add.collider(this.player, this.plataformsGroup,  )
      
      this.shapeGroup = this.physics.add.group()
      this.shape = this.shapeGroup.create(400, 0 ,"triangle")
      this.physics.add.collider(this.shapeGroup, this.plataformsGroup, )

      this.physics.add.overlap(
        this.player,
        this.shapeGroup,
        this.collectShape,
        null,
        this
      )


    }
  
    update() {

    }
    collectShape(player,shape){
      console.log("figura recolectada")
      shape.disableBody(true,true)
    }
  }