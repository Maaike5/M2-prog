class App
{
    runApplication()
    {
        this.greeting = "Starting up"
        this.appnaam = "Demoapp"
        this.versienummer = 0.1
        this.versiedatum = 21-11-2023
        this.Autheur = "Maaike"
        this.copyright = "Maaike Bv"
        this.distributeur = "Maaike Soft"
        this.darkmode = "False"
        this.nummer = 9999.99
        this.eenBool = true
        this.eenString = "te veel variabelen ><"
    }
}

let app = new App();
app.runApplication();
console.log(app.greeting);
console.log("appNaam: " + app.appnaam);
console.log("versienummer: " + app.versienummer);
console.log("versiedatum: " + app.versiedatum);
console.log("Autheur: " + app.Autheur);
console.log("copyright: " + app.copyright);
console.log("distributeur: " + app.distributeur);
console.log("darkmode: " + app.False);
console.log("nummer: " + app.nummer);
console.log("eenBool: " + app.eenBool);
console.log("eenString: " + app.eenString);