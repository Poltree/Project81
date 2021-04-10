
canvas=document.getElementById("MyCanvas")
color="red";
ctx= canvas.getContext("2d")
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(550,200,50,0, 2* Math.PI);
ctx.stroke();

ctx1= canvas.getContext("2d")
color1= "blue";
ctx1.beginPath();
ctx1.strokeStyle = color1;
ctx1.lineWidth = 5;
ctx1.arc(250,200,50,0, 2* Math.PI);
ctx1.stroke();

ctx2= canvas.getContext("2d")
color2= "black";
ctx2.beginPath();
ctx2.strokeStyle = color2;
ctx2.lineWidth = 5;
ctx2.arc(400,200,50,0, 2* Math.PI);
ctx2.stroke();

ctx3= canvas.getContext("2d")
color3= "yellow";
ctx3.beginPath();
ctx3.strokeStyle = color3;
ctx3.lineWidth = 5;
ctx3.arc(325,250,50,0, 2* Math.PI);
ctx3.stroke();

ctx4= canvas.getContext("2d")
color4= "green";
ctx4.beginPath();
ctx4.strokeStyle = color4;
ctx4.lineWidth = 5;
ctx4.arc(475,250,50,0, 2* Math.PI);
ctx4.stroke();
