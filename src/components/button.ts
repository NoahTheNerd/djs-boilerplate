import { Component } from '../types/Component';

export default {
    name: 'button',
    run(interaction, args) {
        interaction.reply('boop! ' + args.abc)
    }
} as Component