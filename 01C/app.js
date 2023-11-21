class App
{
    runApplication()
    {
        this.greeting = "Starting up"
        let appnaam = "Demoapp"
        let versienummer = "0.1"
        let versiedatum = "21-11-2023"
        let Autheur = "Maaike"
        let copyright = "Maaike Bv"
        let distributeur = "Maaike Soft"
        let darkmode = "False"
        let pagenummer = "1"
        let pagecall = "App"
        let whitemode = "true"
        this.getal = "2"
        this.season = "true"
        this.pijl = "north"
    }
}

let app = new App();
app.runApplication();
console.log(app.greeting);
console.log("appNaam: " +app.appNaam);
console.log("versienummer " + app.versienummer);
console.log("versiedatum " + app.versiedatum);
console.log("Autheur " + app.Autheur);
console.log("copyright " + app.copyright);
console.log("distributeur " + app.distributeur);
console.log("darkmode " + app.darkmode);
console.log("pagenummer " + app.pagenummer);
console.log("pagecall " + app.pagecall);
console.log("whitemode " + app.whitemode);
console.log(app.getal);
console.log(app.season);
console.log(app.pijl);