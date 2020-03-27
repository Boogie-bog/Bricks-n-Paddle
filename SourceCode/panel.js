

const updatepanel = function(game,panelctx){
    let panelwidth = 300;
    let panelheight = 600;


    // Lives Counter
    let livesImage = document.getElementById("img_ball");
    panelctx.drawImage(livesImage,25,180,25,25)
    panelctx.font = "25px Arial";
    panelctx.fillStyle = "white";
    panelctx.textAlign = "left";
    panelctx.fillText("x " + game.lives,55,200)

    // Level Counter
    panelctx.font = "bold 35px Arial";
    panelctx.fillStyle = "white";
    panelctx.textAlign = "center";
    panelctx.fillText("Level " + (game.currentLevel+1),panelwidth/2,50)

    // Brick Counter
    panelctx.font = "25px Arial";
    panelctx.fillStyle = "white";
    panelctx.textAlign = "left";
    panelctx.fillText("Bricks destroyed: " + game.brickCounter,25,250)
}

export default updatepanel