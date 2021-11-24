"use strict";
import { readdirSync } from "fs";
import chalk from "chalk";
export default class {
    constructor(client) {
        this.client = client;
    };
    async execute() {
        console.log(`${chalk.green("[SUCCESS]")} Le Client est paré à régner sur le monde de Disboard.`);
        console.log(" ");
        const commands = readdirSync('./cmds/').filter(file => file.endsWith(".js"));
        for (const file of commands) {
            const commandName = file.split(".")[0];
            const command = await import(`../cmds/${file}`);

            console.log(`${chalk.yellow("[LOAD]")} Loaded ${commandName} command.`);
            this.client.commands.set(command.default.name, command.default);
        }
    };
};