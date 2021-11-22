"use strict";
import chalk from "chalk";
export default class {
    constructor(client) {
        this.client = client;
    };
    async execute() {
        console.log(`${chalk.green("[SUCCESS]")} Le Client est paré à régner sur le monde de Disboard.`);
    };
};