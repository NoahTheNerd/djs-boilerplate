import { ActivityType, Client } from "discord.js";
import { deployCommands } from "../utils/deployCommands";
import { deployComponents } from "../utils/deployComponents";

export default {
    name: 'ready',
    once: true,

    run(client : Client) {
        client.user?.setPresence({
            activities: [{
                name: 'Hello :)',
                type: ActivityType.Custom,
            }],
            status: "dnd"  
        })

        deployCommands(client)
        deployComponents()
    }
}