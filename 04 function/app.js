function argumentsAreHandy(supershoutout)
{
    console.log("do you want to give a shoutout");
    console.log(supershoutout);

}
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