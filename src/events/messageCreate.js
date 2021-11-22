"use strict";
import chalk from "chalk";
export default class {
    constructor(client) {
        this.client = client;
    };
    async execute(message) {
        const args = message.content.split(" ").slice(1);
        if(message.author.bot) return;
        if(message.content == `<@!${this.client.user.id}>`) {
            if(message.deletable) {
                message.delete(1000);
            }
            message.channel.send("**Huh? Tu es un peu perdu l'ami? Mon préfixe est: " + this.client.config.prefix + "**");
        }
        else if(message.content.startsWith(this.client.config.prefix)) {
            let commandName = message.content.split(" ")[0].slice(this.client.config.prefix.length);
            let command = this.client.commands.get(commandName) || this.client.commands.find(({help: {aliases}}) => aliases.includes(commandName));
            if(command) {
                if(!command.conf.enabled) return message.channel.send('**:warning: | Cette commande est désactivée!**');
                if(command.conf.developersOnly && !this.client.config.developers.includes(message.author.id)) return message.channel.send('**:warning: | Cette commande est reservée aux Développeurs du Bot!**');
                try {
                    command.execute(message, args);
                } catch (err) {
                    console.log(err);
                    };
                };
            }
    }
};