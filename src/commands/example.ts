import { ApplicationCommandOptionType, CommandInteraction } from "discord.js";
import { Command } from "../../types/Command";
import { tools } from "../utils/componentTools";

export default {
    name: 'ping',
    description: 'Pong! Annoys another person by pinging them.',

    permissions: ['Administrator'],

    options: [
        {
            name: 'user',
            type: ApplicationCommandOptionType.User,
            description: 'The user to ping',
            required: true
        }
    ],
    run(interaction : CommandInteraction) {
        interaction.reply({
            content: `Pong! <@${interaction.options.get('user').user.id}>`,
            components: [tools.row(tools.button({ customId: 'button;abc=xyz', label: ':3', style: 'grey' }))]
        })
    },
} as Command