import {detectCollisionV} from "./collisions.js"
import {detectCollisionH} from "./collisions.js"


// create brick class
export default class Brick {
    constructor(game, position){
        this.image = document.getElementById("img_brick");
        ;
        this.width = 50;
        this.height = 25;
        this.game = game
        this.position = position
        this.markedForDeletion = false;
        this.soundPop = document.getElementById("snd_pop")
    }
    draw(ctx){
        ctx.drawImage(this.image,this.position.x,this.position.y,this.width,this.height)
    }
    update(deltaTime){
        if (detectCollisionV(this.game.ball, this)){
            this.markedForDeletion = true;
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.game.brickCounter += 1;
            this.soundPop.play()
        }
        if (detectCollisionH(this.game.ball, this)){
            this.markedForDeletion = true;
            this.game.ball.speed.x = -this.game.ball.speed.x;
            this.game.brickCounter += 1;
            this.soundPop.play()
        }
    }
}