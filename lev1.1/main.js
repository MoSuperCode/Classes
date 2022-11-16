class Ball {
    constructor(ballType) {
        this.ballType = ballType;
        if (!ballType) {
            this.ballType = "regular";
        }

    }

}
const ball1 = new Ball();
const ball2 = new Ball("super");

console.log(ball1.ballType);
console.log(ball2.ballType);