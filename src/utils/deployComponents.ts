import { ApplicationCommandOptionType, Client, PermissionsBitField } from "discord.js";
import { Glob } from "bun"
import { APIApplicationCommand } from "discord-api-types/v10";
import { Command } from "../types/Command";
import { Component } from "../types/Component"

const COMPONENT_DATA : { [key:string]: Component } = {}

async function deployComponents() {
    const tsGlob = new Glob('**/*.ts')

    for await (const filename of tsGlob.scan('./src/components/')) {
        const componentObj : Component = require('../components/' + filename).default
        COMPONENT_DATA[componentObj.name] = componentObj
    }
}

export { COMPONENT_DATA, deployComponents }