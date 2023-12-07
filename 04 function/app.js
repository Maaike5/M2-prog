function logW(){
    let u = 9;
    let h = 8;
    let l = 15;
    let logY = Math.log(l) + h + Math.pow(u,2);
    console.log(logY);
}
   
function ax2bcWiskunde(x,a,b,c)
{
    let y = (a*(x*x) )+ (b*x)+c;
    return y;
}
let y1 = ax2bcWiskunde(9,3,4,4,89);
console.log(y1);

let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2);

let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3);



function argumentsAreHandy(supershoutout)
{
    console.log("do you want to give a shoutout");
    console.log(supershoutout);

}
argumentsAreHandy("spongebob");
argumentsAreHandy("spongebob");
argumentsAreHandy("spongebob");


function superMooieGlobalFunction()
{
    console.log("Ik ben global");
    console.log("dus je mag mij overal aanroepen ")    
}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();



class App
{
    runApplication()
    {
      console.log("hello world");
      superMooieGlobalFunction();
    }
}


let app = new App();
app.runApplication();