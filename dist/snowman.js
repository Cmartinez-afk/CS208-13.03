const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const flakeSize = 8;

function drawGround(){
    ctx.fillStyle = "lightgray";
    ctx.fillRect(0,0, canvas.width, canvas.height);
    ctx.fillStyle = "brown";
    ctx.fillRect(0, canvas.height - 50, canvas.width, 50);
}

function drawSnowflakes(){
    for(let i = 0; i < 100; i++){
        const x = Math.floor(Math.random() * canvas.width);
        const y = Math.floor(Math.random() * canvas.height);
        drawSingleFlake(x, y);
    }
}

function drawSnowText(){
    ctx.font = "80px Verdana";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillStyle = "blue";
    ctx.fillText("SNOW", canvas.width /2, 10);
}

function drawSnowman(){
    ctx.fillStyle = "white";
    //bottom circle
    ctx.beginPath();
    ctx.arc(150, 200, 50, 0, Math.PI * 2);
    ctx.fill();
    //middle circle
    ctx.beginPath();
    ctx.arc(150, 120, 40, 0, Math.PI * 2);
    ctx.fill();
    //top circle
    ctx.beginPath();
    ctx.arc(150, 60, 25, 0, Math.PI * 2);
    ctx.fill();
}

function drawSingleFlake(x,y){
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x + flakeSize / 2, y + flakeSize / 2);
    ctx.lineTo(x, y + flakeSize);
    ctx.lineTo(x - flakeSize / 2, y + flakeSize / 2);
    ctx.fillStyle = "#eee";
    ctx.fill();
}

window.addEventListener("DOMContentLoaded", function(){
    drawGround();
    drawSnowText();
    drawSnowman();
    drawSnowflakes();
});
