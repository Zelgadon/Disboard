export default {
    name: "test",
    enabled: "true",
    developersOnly: "true",
    async execute(client, message, args) {
        console.log(`${message.author.id} a fait la commande de test`)
    }
}