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

function geforceerd(u,h,l){

    let logY = Math.log(l) + h + Math.pow(u,2);
    console.log(logY)
}
geforceerd(9,8,15)

function argumentsAreHandy(supershoutout)
{
    console.log("do you want to give a shoutout");
    console.log(supershoutout);

}
argumentsAreHandy("Maxverstappen");
argumentsAreHandy("Maxverstappen");
argumentsAreHandy("Maxverstappen");


function superMooieGlobalFunction()
{
    console.log("Ik ben global");
    console.log("dus je mag mij overal aanroepen ");
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


newClassFunction()
{
    console.log("hello world in de nieuweClassFunction");

}

anotherFunctionWithArguments(aArgument)
{
    console.log("kom maar met je argument");
    console.log("hier");
    console.log(aArgument);
}
Mario()
{
    console.log("MARIO!!");
}
schrik()
{
    let bang = "BWAHAHA!!";
    return bang;
}
Math(x,a)
{
    let y = x + a
    return y;
}
besteF1Coureur()
{
    console.log("De beste f1 coureur momenteel is Max Verstappen");
}
}

let app = new App();
app.runApplication();
app.newClassFunction();
app.anotherFunctionWithArguments("dit is een argumet..");
app.Mario();
let schrikken = app.schrik();
console.log(schrikken);
let antwoord = app.Math(89,314);
console.log(antwoord)
app.besteF1Coureur();
