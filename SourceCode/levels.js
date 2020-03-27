import Brick from "./brickclass.js"

export const buildLevel = function(game,level){
    let bricks = [];

    level.forEach(function(row, rowIndex){
        row.forEach(function(brick,brickIndex){
            if(brick == 1){
                let position = {
                    x: brickIndex*50,
                    y: 50+rowIndex*25
                }
                bricks.push(new Brick(game, position))
            }
        })
    })
    return bricks;
}


export const level1 = [
    [0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
]


export const level2 = [
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1],
]


export const level3 = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1],
    [1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1],
    [1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1],
    [1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]