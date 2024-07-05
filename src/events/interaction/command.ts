import { ActivityType, BaseInteraction, Client } from "discord.js";
import { COMMAND_DATA } from "../../utils/deployCommands";

export default {
    name: 'interactionCreate',

    run(interaction : BaseInteraction) {
        if (!interaction.isChatInputCommand()) return

        if (Object.keys(COMMAND_DATA).length == 0) {
            if (interaction.isRepliable()) interaction.reply({ ephemeral: true, content: 'Couldn\'t find relevant data! The bot may still be starting!'}) 
            return
        }
        
        if (COMMAND_DATA[interaction.commandName]) {
            COMMAND_DATA[interaction.commandName].run(interaction)
        } else {
            interaction.reply({ ephemeral: true, content: 'could not find command' })
        }
    }
}