
export const detectCollisionV = function (ball, gameObject){
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;
    let topOfObject = gameObject.position.y;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    let leftOfBall = ball.position.x;
    let leftOfObject= gameObject.position.x;
    let rightOfBall = ball.position.x + ball.size;
    let rightOfObject = gameObject.position.x + gameObject.width;
    let paddleDivision = gameObject.width/5;
    let centerOfBallx = ball.position.x + ball.size/2;
    let centerOfBally = ball.position.y + ball.size/2;
     


    
    if(bottomOfBall>=topOfObject &&
       topOfBall <= bottomOfObject &&
       centerOfBallx <= rightOfObject &&
       centerOfBallx>= leftOfObject){
           return true
       } else {return false}
    }


    export const detectCollisionH = function(ball,gameObject){
        let bottomOfBall = ball.position.y + ball.size;
        let topOfBall = ball.position.y;
        let topOfObject = gameObject.position.y;
        let bottomOfObject = gameObject.position.y + gameObject.height;
        let leftOfBall = ball.position.x;
        let leftOfObject= gameObject.position.x;
        let rightOfBall = ball.position.x +ball.size;
        let rightOfObject = gameObject.position.x + gameObject.width;
        let paddleDivision = gameObject.width/5;
        let centerOfBallx = ball.position.x + ball.size/2;
        let centerOfBally = ball.position.y + ball.size/2;
        
        
        if(
            centerOfBally>=topOfObject &&
            centerOfBally <= bottomOfObject &&
            rightOfBall >= leftOfObject &&
            leftOfBall <= rightOfObject
            ) { return true} else {return false}

    }