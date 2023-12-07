class App
{
    runApplication()
    {
        console.log("hello world!");
        ///code gaat hier!///
        let title = document.getElementById("newstitle");
        console.log(title);
        let newsitem1 = document.getElementsByClassName("gamenews")[0]
        let newsitem2 = document.getElementsByClassName("gamenews")[1]
        console.log(newsitem1);
        console.log(newsitem2);
        let random = Math.random();
        console.log(random);
        if(random < 0.2){
            title.style.backgroundColor = "FF0000";
        } else if(random < 0.6 && random > 0.2){
            title.style.backgroundColor = "345FF9"
        } else if(random < 0.75 && random > 0.6){
            title.style.backgroundColor = "746783"
        } else {
            title.style.backgroundColor = "586648"
        }
        if(random < 0.5){
            newsitem1.style.backgroundColor = "87EFEA"
        } else{
            newsitem1.style.backgroundColor = "F6A7B0"  
        }
        if(random < 0.33){
            newsitem2.style.backgroundColor = "A4BB77"
        } else if (random > 0.33 && random < 0.67){
            newsitem2.style.backgroundColor = "EEBBAA"
        } else if (random > 0.67 && random < 1){
            newsitem2.style.backgroundColor = "F6A7F8"
        }
    }
}
let app = new App();
app.runApplication();