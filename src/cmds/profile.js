import { readFileSync } from "fs";
var players = []
export default {
    name: "profile",
    enabled: "true",
    developersOnly: "true",
    async execute(client, message, args) {
        try {
            players = JSON.parse(readFileSync('./database/players.json', 'utf8'));
            console.log(players)
        } catch (err) {
            console.error(err)
        }
        if(!players.hasOwnProperty(message.author.id)) {
            console.log("Créer profil");
        }
        console.log("Afficher profil");
    }
}