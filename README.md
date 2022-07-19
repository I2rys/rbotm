# RBotM
Revolt server channel message sender via bot.

## Installation
Github:
```
git clone https://github.com/I2rys/rbotm
```

NpmJS:
```
npm i request-async
```

## Usage
```
const rbotm = require("rbotm")
const sender = new rbotm(botToken: string, channelID: string)

sender.send(message: string, channelID: string = optional)
```

## License
MIT © I2rys