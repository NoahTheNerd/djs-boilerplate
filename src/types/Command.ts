import { PermissionResolvable, CommandInteraction, APIApplicationCommandOption } from "discord.js";

export interface Command {
    name: String,
    description?: String,

    dmPermission?: Boolean,
    permissions?: PermissionResolvable[],

    options: APIApplicationCommandOption[]

    run( interaction: CommandInteraction ): void
}