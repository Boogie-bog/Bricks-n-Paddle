import Game from "./gameclass.js"
import updatepanel from "./panel.js"

// Declare Variables and Constants
let canvas = document.getElementById("gameScreen");
let sidePanel = document.getElementById("gameInfo")
let Panelctx = sidePanel.getContext("2d")
let ctx = canvas.getContext("2d");
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let game = new Game(GAME_WIDTH,GAME_HEIGHT,ctx)

let lastTime = 0;



// Create game loop
const gameLoop = function(timestamp){
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp
    ctx.clearRect(0,0,800,600);
    game.update(deltaTime,ctx);
    game.draw(ctx);
    Panelctx.clearRect(0,0,300,600)
    updatepanel(game,Panelctx)
    requestAnimationFrame(gameLoop);
}

// Call Game Loop
requestAnimationFrame(gameLoop)