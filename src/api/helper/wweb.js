// const qrcode = require('qrcode-terminal')

const { Client } = require('whatsapp-web.js')
const client = new Client()

client.on('qr', (qr) => {
    // qrcode.generate(qr, { small: true })
    console.log('@QR_Code : ', qr)
})

client.on('ready', async (cli) => {
    console.log('Client is ready!', client)
    // console.log("client" client)
    // client
    //     .getChats()
    //     .then((chats = 'aaaaaaaa') => console.log('@chats : ', chats))
    console.log('ddddd')
})

client.initialize()
