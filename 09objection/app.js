class App {
    runApplication() {
        console.log("Hello world");

        let spotifyPlaylist = {
            accountName: "leraar",
            songs: [
                {
                    artist: "Adel",
                    title: "Hello",
                    album: "25",
                    trackNumber: 1,
                    genre: "pop"
                },
                {
                    artist: "Jaap Reesema",
                    title: "Alles Komt Goed",
                    album: "Als je voor me staat",
                    trackNumber: 3,
                    genre: "nederlandse pop"
                },
                {
                    artist: "flemming",
                    title: "Amsterdam",
                    album: "FLEMMING",
                    trackNumber: 6,
                    genre: "Nederlandse pop"
                }
            ],
            favoriteArtist: {
                artistName: "Jaap resema",
                age: 39,
                grammyCount: 0,
                number1HitsCount: 0,
                genre: "Nederlandse pop",
            }
        };
        console.log("Favorite Artist:", spotifyPlaylist.favoriteArtist);

        for (let i = 0; i < spotifyPlaylist.songs.length; i++) {
            let song = spotifyPlaylist.songs[i];
            console.log(`Song ${i + 1}: ${song.title} by ${song.artist}`);
        }

        let magicaart = {
            attack: 3,
            defense: 2,
            name: "basic creature",
            cost: ["1R", "1B"],
            text: "this basic creature is better at attacking"
        };
        let oneCost = magicaart.cost[0];
        let twoCost = magicaart.cost[1];

        console.log("You play: " + magicaart.name);
        console.log("This basic creature is better at attacking");
        console.log(`Basic creature has ${magicaart.attack} attack`);
        console.log(`Basic creature has ${magicaart.defense} defense`);
        console.log(`You played: ${oneCost} and ${twoCost}`);

        console.log("Magicaart:", magicaart);
        let dataToSend = JSON.stringify(magicaart);
        console.log("Data to send:", dataToSend);

        console.log("Spotify Playlist:", spotifyPlaylist);
        let dataToSend2 = JSON.stringify(spotifyPlaylist);
        console.log("Data to send 2:", dataToSend2);

        let coolJson = '{"legosetname":"Geluksdraak","itemnumber":80112,"pieces":1171,"releaseDate":"Binnenkort op 1 januari 2024","price":79.99}';

        let objectFromString = JSON.parse(coolJson);
        console.log("Lego Set Properties:");
        console.log("Lego Set Name:", objectFromString.legosetname);
        console.log("Item Number:", objectFromString.itemnumber);
        console.log("Number of Pieces:", objectFromString.pieces);
        console.log("Release Date:", objectFromString.releaseDate);
        console.log("Price:", objectFromString.price);

        
        fetch("lego.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`something went rong! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => {
            console.log("From the net==============");
            console.log(json);
        });
        


        fetch("nope.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Something went wrong! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((json) => {
            console.log("From the net==============");
            console.log(json);
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }
}

let app = new App();
app.runApplication();