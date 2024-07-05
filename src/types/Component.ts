import { MessageComponentInteraction } from "discord.js"

export interface Component {
    name: String,
    
    run( interaction: MessageComponentInteraction, args: { [key: string]: string } ): void
}