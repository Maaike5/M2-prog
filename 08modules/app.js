import { Dino } from "./dino.mjs";
import { Plant } from "./plant.mjs";
import { MaakDino, MaakPlant } from "./fabriek.mjs";

let dino = new Dino("modulosaurus");
console.log(dino.naam);

let plant = new Plant("moduloplant");
console.log(plant.naam);

class App {
    runApplication() {
        console.log("Hello world");
    }
}


let maakdino = MaakDino();
let maakplant = MaakPlant();

let app = new App();
app.runApplication();