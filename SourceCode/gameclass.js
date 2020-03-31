import Paddle from "./paddle.js"
import Ball from "./class_ball.js"
import InputHandler from "./inputHandler.js"
import Brick from "./brickclass.js"
import {buildLevel, level1, level2, level3} from "./levels.js"



// Creating Game Class

const GAMESTATE = {
    PAUSED: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    WINNER: 4
};

export default class Game {
    constructor(GameWidth, GameHeight, ctx){
        this.GameWidth = GameWidth;
        this.GameHeight = GameHeight;
        this.gameState = GAMESTATE.MENU
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle,this, ctx);
        this.gameObjects = []
        this.lives = 100
        this.bricks = []
        this.currentLevel = 0
        this.levels = [level1,level2,level3]
        this.bricksInLevel = 999
        this.brickCounter = 0;
        this.brick = new Brick
        this.soundGO = document.getElementById("snd_GO");
        this.soundParti = document.getElementById("snd_parti");
        this.soundOhalala = document.getElementById("snd_ohlala")
        this.soundNL = document.getElementById("snd_NL")
        this.completeSound = document.getElementById("snd_complete")
        
    }

    BuildNewLevel(ctx){
        this.bricks = buildLevel(this,this.levels[this.currentLevel]);
        this.gameObjects = [this.paddle,this.ball,...this.bricks];
        this.ball.speed.y = 0;
        this.ball.speed.x = 0;
        this.ball.position.y = 500;
        this.ball.position.x = 400;
        this.bricksInLevel = this.bricks.length
        if(this.currentLevel>0){this.soundNL.play()};
    }

    StartGame(ctx){
        if(this.gameState == GAMESTATE.RUNNING && this.ball.speed.y == 0 && this.ball.speed.x == 0){
            this.ball.speed.y = 6;
            this.soundParti.play()
            return;}
       
        
        if(this.gameState != GAMESTATE.MENU){return}
        
        this.gameState = GAMESTATE.RUNNING;

        this.BuildNewLevel(ctx);

    }

    togglePause(){
        if (this.gameState == GAMESTATE.RUNNING) {
            this.gameState = GAMESTATE.PAUSED;
        } else {
            if( this.gameState == GAMESTATE.PAUSED) {this.gameState = GAMESTATE.RUNNING}
        }
    }

    update(deltaTime,ctx){
        // Do not update if not RUNNING
        if (
            this.gameState == GAMESTATE.PAUSED ||
            this.gameState == GAMESTATE.MENU ||
            this.gameState == GAMESTATE.GAMEOVER||
            this.gameState == GAMESTATE.WINNER
            ) {return}
        
        // Update All Objects
        this.gameObjects.forEach(function(object){
            object.update(deltaTime)
        });

        // Filter Gameobjects to remove "MarkedForDeletion"
        this.bricks = this.bricks.filter(brick => !brick.markedForDeletion);
        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
        
        // When game is stopped between lives or levels
        if(this.gameState == GAMESTATE.RUNNING && this.ball.speed.x == 0 && this.ball.speed.y == 0){
            this.ball.position.x = this.paddle.position.x + this.paddle.width/2 - this.ball.size/2;
            ctx.font = "30px Arial";
            ctx.fillStyle = "White";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACEBAR to Continue",this.GameWidth/2,this.GameHeight/2+50)
            if(this.bricks.length == this.bricksInLevel){
                ctx.fillText("Level " + (this.currentLevel+1),this.GameWidth/2,this.GameHeight/2-50)
            }
        }

        // Go to GameOver Screen
        if(this.lives < 1){
            this.gameState = GAMESTATE.GAMEOVER
            this.soundGO.play();
        }
        
        // Load next level
        if(this.bricks.length == 0){
            this.currentLevel += 1;
        if(this.currentLevel < this.levels.length){
            this.BuildNewLevel(ctx)} else{
                this.completeSound.play()
                this.gameState = GAMESTATE.WINNER;
                }
        }
    }

    draw(ctx){
        this.gameObjects.forEach(function(object){
            object.draw(ctx)
        })
        if(this.gameState == GAMESTATE.PAUSED){
            ctx.fillStyle = "#00000080"
            ctx.fillRect(0,0,this.GameWidth,this.GameHeight)
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused",this.GameWidth/2,this.GameHeight/2)
        }
        
        if(this.gameState == GAMESTATE.MENU){
            ctx.fillStyle = "#000000";
            ctx.fillRect(0,0,this.GameWidth,this.GameHeight)
            ctx.font = "30px Arial";
            ctx.fillStyle = "White";
            ctx.textAlign = "center";
            ctx.fillText("Press SPACEBAR to Start Game!",this.GameWidth/2,this.GameHeight/2)
        }
        if(this.gameState == GAMESTATE.GAMEOVER){
            ctx.fillStyle = "#000000";
            ctx.fillRect(0,0,this.GameWidth,this.GameHeight)
            ctx.font = "30px Arial";
            ctx.fillStyle = "White";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER!",this.GameWidth/2,this.GameHeight/2)
        }
        if(this.gameState == GAMESTATE.WINNER){
            ctx.fillStyle = "#000000";
            ctx.fillRect(0,0,this.GameWidth,this.GameHeight)
            ctx.font = "30px Arial";
            ctx.fillStyle = "White";
            ctx.textAlign = "center";
            ctx.fillText("Bravo Bravo Bravo Bravo",this.GameWidth/2,this.GameHeight/2)
        }
    }
}
