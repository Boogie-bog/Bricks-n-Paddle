import {detectCollisionV} from "./collisions.js"
import {detectCollisionH} from "./collisions.js"



export default class Paddle {
     constructor(game){
        this.width = 150;
        this.height = 20;
        this.maxSpeed = 7;
        this.speed = 0;            
        this.position = {
            x: game.GameWidth / 2 - this.width / 2 -1,
            y: game.GameHeight - this.height - 10,
        }
        this.game = game
        this.boopSound = document.getElementById("snd_boop")
    }
    moveLeft(){
           this.speed = -this.maxSpeed;
   }
    
    moveRight(){
        this.speed = this.maxSpeed;
    }
    
    moveStop(){
        this.speed = 0;
    }
    
    draw(ctx){
        ctx.fillStyle = "#00f"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    update(deltaTime){
        let bottomOfBall = this.game.ball.position.y + this.game.ball.size;
        let topOfPaddle = this.position.y;
        let bottomOfPaddle = this.position.y + this.height;
        let leftOfBall = this.game.ball.position.x;
        let leftOfPaddle = this.position.x;
        let rightOfBall = this.game.ball.position.x +this.size;
        let rightOfPaddle = this.position.x + this.width;
        let centerOfBallx = this.game.ball.position.x + this.game.ball.size/2;
        let centerOfBally = this.game.ball.position.y + this.game.ball.size/2;
        
        this.position.x += this.speed;
        if(this.position.x < 0){this.position.x = 0}
        if(this.position.x>800-this.width){this.position.x = 800-this.width}
        
        if (detectCollisionV(this.game.ball,this)){
            this.game.ball.position.y = this.position.y-this.game.ball.size;
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.game.ball.speed.x = this.game.ball.speed.x + 10*(((centerOfBallx-leftOfPaddle) / this.width)-.5)
            this.boopSound.play()

        }

        if(detectCollisionH(this.game.ball, this)){
            this.game.ball.speed.x = -this.game.ball.speed.x
            
        }
    }
}