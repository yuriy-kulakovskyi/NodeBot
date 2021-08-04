const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '1908372933:AAF0_7GL3giszRB_h8MPPJen57T9h0CCum0';

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.on('message', (msg) =>{
  let chatId = msg.chat.id;
  bot.onText(/\/start/, msg => {
    bot.sendMessage(chatId, 'Привіт ' + msg.from.first_name + ', як я можу допомогти?', {
      reply_markup:{
        keyboard:[
          ['Показати номер телефону', 'Соціальні мережі', 'Переглянути фото']
        ],
        resize_keyboard:true
      }
    });
  });
  if(msg.text === "Показати номер телефону") {
    bot.sendMessage(chatId, 'Який у вас оператор?', {
      reply_markup:{
        inline_keyboard:[
          [
            {
              text: 'Лайф',
              callback_data: 'number1'
            },
            {
              text: 'Київстар',
              callback_data: 'number2'
            },
            {
              text:'МТС',
              callback_data: 'number3'
            }
          ]
        ]
      }
    });
  }else if(msg.text === "Соціальні мережі") {
    bot.sendMessage(chatId, 'Соціальна мережа, яку ви хочете переглянути?', {
      reply_markup:{
        inline_keyboard:[
          [
            {
              text: 'Instagram',
              callback_data: 'soc-med1'
            },
            {
              text: 'Facebook',
              callback_data: 'soc-med2'
            },
            {
              text: 'LinkedIn',
              callback_data: 'soc-med3'
            },
            {
              text: 'Показати інші',
              callback_data: 'others'
            }
          ]
        ]
      }
    });
  }else if(msg.text === 'Переглянути фото') {
    let photos = ['https://i1.wp.com/passionpassport.com/wp-content/uploads/2017/07/angelo-mendoza-light-photography-sunset.jpg?fit=1049%2C590&ssl=1',
     'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349',
     'https://cdn.motor1.com/images/mgl/ljVZ1/s3/2022-toyota-corolla-cross-us-spec.jpg',
     'https://cdn.pocket-lint.com/r/s/1200x/assets/images/151442-cameras-feature-stunning-photos-from-the-national-sony-world-photography-awards-2020-image1-evuxphd3mr.jpg',
     'https://m.economictimes.com/thumb/msid-76956781,width-1200,height-900,resizemode-4,imgsize-65468/istock-1255872241.jpg',
     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png',
     'https://web-creator.ru/uploads/Page/19/python.svg'];
     let randomPhoto = photos[Math.floor(Math.random() * photos.length)];
     bot.sendMessage(chatId, randomPhoto);
  }else if(msg.text === "/start") {
    console.log('command start active');
  }else {
    bot.sendMessage(chatId, "Щось не розумію🤔 використай кнопки😉");
  }
});

bot.on('callback_query', query => {
  if(query.data == 'number1') {
    bot.answerCallbackQuery(query.id, '');
    bot.sendMessage(query.message.chat.id, '+38073389938');
  }else if(query.data == 'number2') {
    bot.answerCallbackQuery(query.id, '');
    bot.sendMessage(query.message.chat.id, '+38097567383');
  }else if(query.data == 'number3') {
    bot.answerCallbackQuery(query.id, '');
    bot.sendMessage(query.message.chat.id, '+3805099393');
  }else if(query.data == 'soc-med1') {
    bot.answerCallbackQuery(query.id, '');
    bot.sendMessage(query.message.chat.id, 'https://instagram.com/yura_kulakovskyi');
  }else if(query.data == 'soc-med2') {
    bot.answerCallbackQuery(query.id, '');
    bot.sendMessage(query.message.chat.id, 'https://www.facebook.com/yura.kulakovskiy');
  }else if(query.data == 'soc-med3') {
    bot.answerCallbackQuery(query.id, '');
    bot.sendMessage(query.message.chat.id, "https://www.linkedin.com/in/yuriy-kulakovskyi-783930213/");
  }else if(query.data == 'others') {
    bot.answerCallbackQuery(query.id, '');
    bot.sendMessage(query.message.chat.id, "https://github.com/yuriy-kulakovskyi/");
  }
})