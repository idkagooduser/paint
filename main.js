canvas=document.getElementById("myCanvas");
color="black";
ctx= canvas.getContext("2d");
var lastx, lasty;
var mouseEvent="empty";

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouseEvent="mouseDown";

}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent="mouseleave";

}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent="mouseUP";

}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=5;
      
      ctx.arc(currentx,currenty,30,0,2*Math.PI);
      ctx.stroke();
    }
lastx=currentx;
lasty=currenty;
}




