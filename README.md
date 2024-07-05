# djs-boilerplate
Boilerplate for a Discord bot running with [Bun](https://bun.sh/)!

## Authentication
Create a `.env.local` file and put your token in.
```env
DISCORD_TOKEN=???
```

## Adding features
Seeing as we use globs, any TypeScript files within the commands or components directory will be scanned. Simply add an `export default` object formatted like the examples and it will be automatically added.