var mouseevent="empty"
var lastx=0;
var lasty=0;
var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var color="red";
var linewidth=2;
canvas.addEventListener("mousedown",mymouseDown);
function mymouseDown(e){
    mouseevent="mouseDown";   
}
canvas.addEventListener("mouseup",mymouseUp);
function mymouseUp(e){
    mouseevent="mouseUp";   
}
canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseevent="mouseleave"; 
}
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    CurrentX=e.clientX-canvas.offsetLeft;
    CurrentY=e.clientY-canvas.offsetTop;
    if(mouseevent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=linewidth;
        ctx.moveTo(lastx,lasty)
        ctx.lineTo(CurrentX,CurrentY);
        ctx.stroke();
    }
    lastx=CurrentX;
    lasty=CurrentY
}
function clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}