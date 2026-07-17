const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ] 
});

client.once('ready', () => {
    console.log(`Bot đã đăng nhập thành công!`);
});

client.on('messageCreate', (message) => {
    // Kiểm tra xem người nhắn có phải là bot không, nếu phải thì bỏ qua
    if (message.author.bot) return;

    // Kiểm tra nội dung tin nhắn có phải là !ping không
    if (message.content === '!ping') {
        // Trả lời lại Pong!
        message.reply('Pong!');
    }
});

// THAY ĐỔI DÒNG NÀY: Lấy Token thật từ Discord Portal
client.login('process.env.TOKEN');