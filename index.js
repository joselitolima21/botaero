var TelegramBot = require('node-telegram-bot-api');
var token = '892885157:AAEADekaCIVBcIP4ndw4lDZb2t2k3ua3A_s';
var bot = new TelegramBot(token,{polling:true});

//Texto de strat
bot.onText(/\/start/,function(msg){
    var chatId = msg.chat.id;
    var ola = 'Olá ' + msg.from.first_name + ', seja bem vindo ao bot da equipe Sol do equador, aqui você encontrará informações importantes da equipe!\n\n'
    var help = 'Digite /help para saber todas as minhas fucionalidades.'
    var mensagem = ola+help;
    bot.sendMessage(chatId,mensagem);
});
//Resposta dos eventos
//contas
bot.onText(/\/contas/,function(msg){
    var chatId = msg.chat.id;
    var googledrive = '<b> - GoogleDrive: - </b>\nLogin: projaerodesign@ifpi.edu.br\nSenha: AeroDesign123\n'
    var onedrive = '<b> - OneDrive: - </b>\nLogin: ifp.aerodesign@hotmail.com\nSenha: AeroDesign'
    var mensagem = googledrive+onedrive;
    bot.sendMessage(chatId,mensagem,{parse_mode: "HTML"});
});
//help
bot.onText(/\/help/,function(msg){
    var chatId = msg.chat.id;
    var contas = 'Digitando /contas você terá acesso a uma lista de contas utilizadas pela equipe.\n'
    var datas = 'Digitando /datas você terá acesso aos prazos e ás datas importantes da equipe.\n'
    var sugestao = 'Tente digitar um oi para mim, ficaria agradecido em lhe responder!!!'
    var mensagem = contas+datas+sugestao;
    bot.sendMessage(chatId,mensagem);
});
//datas
bot.onText(/\/datas/,function(msg){
    var chatId = msg.chat.id;
    var mensagem = 'Aqui deverá ser colocado as datas e os prazos.';
    bot.sendMessage(chatId,mensagem);
});
//Interaçao 'oi'
bot.on('message', (msg) => {
    var Oi = "oi";
    if (msg.text.toString().toLowerCase().indexOf(Oi) === 0) {
    bot.sendMessage(msg.chat.id,'Oi ' + msg.from.first_name);
    } 
    });
