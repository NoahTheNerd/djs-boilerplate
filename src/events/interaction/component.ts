import { ActivityType, BaseInteraction, Client } from "discord.js";
import { COMPONENT_DATA } from "../../utils/deployComponents";

export default {
    name: 'interactionCreate',

    run(interaction : BaseInteraction) {
        if (!interaction.isMessageComponent()) return

        if (Object.keys(COMPONENT_DATA).length == 0) {
            if (interaction.isRepliable()) 
                interaction.reply({ ephemeral: true, content: 'Couldn\'t find relevant data! The bot may still be starting!'}) 

            return
        }
        
        /**
         * A component id is formatted like "mycomponent;param=value;param=value" and the code below does the following:
         * 
         *   - Split into two variables, one consisting of a string being the id, the other being an array of strings like param=value
         *   - For each parameter, split at the first equals (=) sign and make a key-value object out of these splits.
         */
        const [ componentId, ...componentRawParams ] = interaction.customId.split(';')

        const componentArgs = Object.fromEntries(
            componentRawParams.map(params => params.split(/=(.*)/s))
        )

        if (!COMPONENT_DATA[componentId]) {
            if (interaction.isRepliable()) 
                interaction.reply({ ephemeral: true, content: 'Couldn\'t find this component ID!'}) 

            return
        }

        COMPONENT_DATA[componentId].run(interaction, componentArgs)
    }
}