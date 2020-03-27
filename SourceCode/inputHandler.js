import Game from "./gameclass.js";

export default class InputHandler {
    constructor(paddle, game, ctx){
        document.addEventListener("keydown",function(event){
            switch(event.keyCode){
                case 37: paddle.moveLeft(); break;
                case 39: paddle.moveRight(); break;
                case 27: game.togglePause(); break;
                case 32: game.StartGame(ctx); break;
                case 13: 
                    game.paddle.boopSound.play();
                    game.ball.bipSound.play();
                    game.brick.soundPop.play();
                    break;

            }
        })

        document.addEventListener("keyup",function(event){
            switch(event.keyCode){
                case 37: if(paddle.speed<0){paddle.moveStop()}; break;
                case 39: if(paddle.speed>0){paddle.moveStop()}; break;
                
        }

        })
    }
}