import {detectCollisionV} from "./collisions.js"
import {detectCollisionH} from "./collisions.js"

export default class Ball {
    constructor(game){
        this.image = document.getElementById("img_ball");
        ;
        this.size = 15;
        this.speed = {
            x: 0,
            y: 6
        };
        this.maxSpeed = {
            x: 5,
            y: 5
        };
        this.position ={
            x: 400,
            y: 400
        }
        this.game = game;
        this.bipSound = document.getElementById("snd_bip");
        this.ohlalaSound = document.getElementById("snd_ohlala")
    }

    reset(){
        this.game.lives -= 1;
        this.position.x = 400;
        this.position.y = 500;
        this.speed.x = 0;
        this.speed.y = 0;
        if(this.game.lives>0){this.ohlalaSound.play()};

    }
    draw(ctx){
        ctx.drawImage(this.image, this.position.x,this.position.y,this.size, this.size);
    }

    update(deltaTime){
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
        if(this.position.x > this.game.GameWidth - this.size || this.position.x < 0){
            this.speed.x = -this.speed.x;
            this.bipSound.play()
        };
        if(this.position.y < 0) {
            this.speed.y = -this.speed.y
            this.bipSound.play()
        };
        if(this.position.y > this.game.GameHeight -this.size){this.reset()}
    }
}