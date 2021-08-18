var ball = document.getElementsByClassName("dot")[0];
//const ball = document.querySelector(".dot");
var myImg = document.getElementsByClassName("barcelona")[0];

let mouseX = 0;
let mouseY = 0;

let ballX = 0;
let ballY = 0;

let speed = 0.06;

var on = false;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);

  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  requestAnimationFrame(animate);
}

animate();

function getPosition(element) {
  return {
    left: element.x,
    top: element.y,
    right: element.x + element.width,
    bottom: element.y + element.height
  }
}

var box = getPosition(myImg);
console.log(box);

function checkBounds() {
  if (mouseX >= box.left && mouseY <= box.bottom &&
     mouseX >= box.left && mouseY >= box.top &&
     mouseX <= box.right && mouseY <= box.bottom &&
     mouseX <= box.right && mouseY >= box.top) {
        ball.style.background = 'rgba(250, 250, 250, 1)';
        ball.style.transform = 'scale(1.75) translate(-45%, -45%)';
        ball.style.border = '1px solid rgba(0, 0, 0, 0)';
        ball.style.zIndex = '2';
        myImg.style.transform = 'scale(1)';
        //return true;
      }
  else {
    ball.style.transform = 'scale(1) translate(-45%, -45%)';
    ball.style.background = 'rgba(0, 0, 0, 1)';
    ball.style.border = '1px solid rgba(0, 0, 0, 0)';
    ball.style.zIndex = '2';
    myImg.style.transform = 'scale(1.1)';
    //return false;
  }
}

function handleMouseMove(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
  checkBounds();
}

function growBall() {
  ball.style.transform = 'scale(2) translate(-50%, -50%)';
  ball.addEventListener('mouseenter', growBall);
}

function shrinkBall() {
  ball.style.transform = 'scale(1) translate(-50%, -50%)';
}
/*
myImg.addEventListener('mouseenter', growBall);
myImg.addEventListener('mouse')
*/
document.addEventListener('mousemove', handleMouseMove);
