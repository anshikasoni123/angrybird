class Log extends BaseClass{
    constructor(x, y, width, height, angle) 
    {
      super(x, y, width, height)

      this.image = loadImage("sprites/wood.png")

      Matter.setAngle(this.Body, angle);
    }
  }
  