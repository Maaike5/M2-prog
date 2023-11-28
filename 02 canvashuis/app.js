class App
{
    runApplication()
    {
      let canvas= document.getElementById("canvasId");
      console.log(canvas);
      let g = canvas.getContext("2d");
      g.fillStyle = "green";
      g.fillRect(0,0,canvas.width,canvas.height)
      g.fillStyle = "red";
      g.fillRect(0,0,10,10);
    }
}

let app = new App();
app.runApplication();
console.log()
