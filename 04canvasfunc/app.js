class App
{
    runApplication()
    {
      console.log("Hello world");
      this.tekenhuis

      tekenhuis(g) 
    {
      let canvas= document.getElementById("canvasId");
      g = canvas.getContext("2d");
      g.fillRect(0,0,10,10)
      g.beginPath()
      g.fillStyle = "red";
      g.moveTo(30+x,10+y);
      g.lineTo(20+x,30+y);
      g.lineTo(60+x,40+y);
      g.lineTo(70+x,20+y)
      g.closePath();
      g.stroke();
      g.fill()
      
      g.beginPath()
      g.fillStyle = "gray";
      g.moveTo(20+x,30+y);
      g.lineTo(20+x,50+y);
      g.lineTo(60+x,60+y);
      g.lineTo(60+x,40+y)
      g.closePath();
      g.stroke();
      g.fill();

      g.beginPath()
      g.fillStyle = "gray";
      g.moveTo(60+x,40+y);
      g.lineTo(80+x,30+y);
      g.lineTo(80+x,50+y);
      g.lineTo(60+x,60+y)
      g.closePath();
      g.stroke();
      g.fill();

      g.beginPath()
      g.fillStyle = "black";
      g.moveTo(60+x,40+y);
      g.lineTo(80+x,30+y);
      g.lineTo(70+x,20+y);
      g.closePath();
      g.stroke();
      g.fill();

      g.beginPath()
      g.fillStyle = "lightblue";
      g.moveTo(79+x,33+y);
      g.lineTo(78+x,43+y);
      g.lineTo(65+x,50+y);
      g.lineTo(65+x,40+y)
      g.closePath();
      g.stroke();
      g.fill();
      
    }
  }
} 

let app = new App();
app.runApplication();
console.log()
