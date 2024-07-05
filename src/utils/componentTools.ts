import { ActionRowBuilder, BaseModalData, ButtonBuilder, ButtonStyle, ModalBuilder, ModalComponentData, StringSelectMenuBuilder, type ButtonComponentData, type StringSelectMenuComponentData } from "discord.js"

const buttonStyles = {
    red: ButtonStyle.Danger,
    green: ButtonStyle.Success,
    blue: ButtonStyle.Primary,
    gray: ButtonStyle.Secondary,
    grey: ButtonStyle.Secondary
}

export const tools = {
    button(buttonOptions : Partial<ButtonComponentData>) {
        const isArr = Array.isArray(buttonOptions)
        if (!isArr) buttonOptions = [buttonOptions]

        buttonOptions.map(buttonData => {
            if (typeof buttonData.style == 'string') buttonData.style = buttonStyles[buttonData.style] || buttonData.style
            return buttonData
        })

        if (isArr) return buttonOptions.map(x => new ButtonBuilder(x))
        return new ButtonBuilder(buttonOptions[0])
    },

    select(selectOptions : Partial<StringSelectMenuComponentData>) {
        return new StringSelectMenuBuilder(selectOptions)
    },

    modal(modalOptions : Partial<ModalComponentData>) {
        return new ModalBuilder(modalOptions)
    },

    row(components) {
        const isArr = Array.isArray(components)
        if (!isArr) components = [components]

        return new ActionRowBuilder({ components: components })
    },
}