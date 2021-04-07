
		var c=document.getElementById("bluecircle");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.arc(130,130,90,0,2*Math.PI);
		ctx.lineWidth=10;
		ctx.strokeStyle="blue";
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(330,130,90,0,2*Math.PI);
		ctx.strokeStyle="black";
		ctx.stroke();
		

		ctx.beginPath();
		ctx.arc(530,130,90,0,2*Math.PI);
		ctx.strokeStyle="red";
		ctx.stroke();
		

		ctx.beginPath();
		ctx.arc(230,230,90,0,2*Math.PI);
		ctx.strokeStyle="orange";
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(430,230,90,0,2*Math.PI);
		ctx.strokeStyle="green";
		ctx.stroke();
		
		ctx.beginPath();
		ctx.arc(130,130,90,0*Math.PI,0.1*Math.PI);
		ctxx.strokeStyle="blue";
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(330,130,90,0.5*Math.PI,0.6*Math.PI);
		ctx.strokeStyle="black";
		ctx.stroke();
		

		ctx.beginPath();
		ctx.arc(330,130,90,0,0.2*Math.PI);
		ctx.strokeStyle="black";
		ctx.stroke();
		

		ctx.beginPath();
		ctx.arc(530,130,90,0.5*Math.PI,0.6*Math.PI);
		ctx.strokeStyle="red";
		ctx.stroke();
