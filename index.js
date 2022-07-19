"use strict";

// Dependencies
const request = require("request-async")

// Main
class Module {
    constructor(botToken, channelID){
        this.botToken = botToken
        this.channelID = channelID
    }

    async send(message, channelID){
        if(!channelID) channelID = this.channelID

        try{
            const response = await request.post(`https://api.revolt.chat/channels/${channelID}/messages`, {
                headers: {
                    "content-type": "application/json",
                    "x-bot-token": this.botToken
                },
                body: JSON.stringify({ nonce: `AAAAAAAA${Math.floor(Math.random() * 999999999)}`, content: message, })
            })

            if(response.body.indexOf('"author":') !== -1){
                return true
            }else{
                return false
            }
        }catch{
            return false
        }
    }
}

module.exports = Module