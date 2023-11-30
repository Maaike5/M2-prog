class App
{
    runApplication()
    {
      let canvas= document.getElementById("canvasId");
      console.log(canvas);
      let g = canvas.getContext("2d");
      g.beginPath()
      g.fillStyle = "red";
      g.moveTo(30,10);
      g.lineTo(20,30);
      g.lineTo(60,40);
      g.lineTo(70,20)
      g.closePath();
      g.stroke();
      g.fill()
      
      g.beginPath()
      g.fillStyle = "gray";
      g.moveTo(20,30);
      g.lineTo(20,50);
      g.lineTo(60,60);
      g.lineTo(60,40)
      g.closePath();
      g.stroke();
      g.fill();

      g.beginPath()
      g.fillStyle = "gray";
      g.moveTo(60,40);
      g.lineTo(80,30);
      g.lineTo(80,50);
      g.lineTo(60,60)
      g.closePath();
      g.stroke();
      g.fill();

      g.beginPath()
      g.fillStyle = "black";
      g.moveTo(60,40);
      g.lineTo(80,30);
      g.lineTo(70,20);
      g.closePath();
      g.stroke();
      g.fill();

      g.beginPath()
      g.fillStyle = "lightblue";
      g.moveTo(79,33);
      g.lineTo(78,43);
      g.lineTo(65,50);
      g.lineTo(65,40)
      g.closePath();
      g.stroke();
      g.fill();

      
    }
}

let app = new App();
app.runApplication();
console.log()
