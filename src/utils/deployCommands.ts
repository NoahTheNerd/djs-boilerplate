import { ApplicationCommandOptionType, Client, PermissionsBitField } from "discord.js";
import { Glob } from "bun"
import { APIApplicationCommand } from "discord-api-types/v10";
import { Command } from "../types/Command";

const COMMAND_DATA : { [key:string]: Command } = {}

async function deployCommands(client : Client) {
    const discordCommandData : APIApplicationCommand[] = []
    const tsGlob = new Glob('**/*.ts')
    
    // For every command file...
    for await (const filename of tsGlob.scan("./src/commands/")) {
        const commandObject = require('../commands/' + filename).default;
        
        COMMAND_DATA[commandObject.name] = commandObject

        // Pushing the data to get it ready to be set
        discordCommandData.push({
            name: commandObject.name,

            description: commandObject.description || 'No description',
            
            dm_permission: commandObject.dmPermission || false,
            default_member_permissions: new PermissionsBitField(commandObject.permissions) || '8',

            options: commandObject.options
        })
    }

    // ...and finally set it!
    client.application?.commands.set(discordCommandData)
}

export { COMMAND_DATA, deployCommands }