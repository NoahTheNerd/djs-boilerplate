import { Client, GatewayIntentBits, PermissionsBitField } from 'discord.js';
import { Glob } from "bun";

const client = new Client({intents: [GatewayIntentBits.Guilds]});
const tsGlob = new Glob('**/*.ts')

for await (const filename of tsGlob.scan('./src/events/')) {
    const eventData = require('./events/' + filename).default

    if (eventData.once == true) {
        client.once(eventData.name, eventData.run)
    } else {
        client.on(eventData.name, eventData.run)
    }
}

client.login(process.env.DISCORD_TOKEN);