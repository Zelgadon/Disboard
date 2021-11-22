"use strict";
import { Client, Collection, Intents } from "discord.js";
import config from "../config/client.js";

const myIntents = new Intents();
myIntents.add(Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES);

export class client extends Client {
    constructor() {
        super({ intents: myIntents });
        this.config = config;
        this.commands = new Collection();
    }

    async execute() {
        const ready = new (await import(`./../events/ready.js`)).default(this);
        const messageCreate = new (await import(`./../events/messageCreate.js`)).default(this);
        this.once('ready', (client) => {
            ready.execute(client)
        });
        this.on('messageCreate', (client, message)=> {
            messageCreate.execute(client, message)
        });
        await this.login(config.token)
    }
}