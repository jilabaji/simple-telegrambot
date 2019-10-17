const telebot = require('../lib/telebot')

/**
 * sum function to test application
 * @param {Number} num1 
 * @param {Number} num2 
 */
let sum = async (num1, num2) => {
    try {
      const total = num1 + num2;
      if (isNaN(total)) {
        const error = 'error';
        throw error;
      } else {
        return total;
      }
    } catch (error) {
      throw error
    }
}

let send_welcome_note = async (body) => {
    try {
        const { message } = body;

        let replay = "Welcome to Telegram app"
        return await telebot.notify_monkey( message.chat.id ,replay)    
    } catch (error) {
        throw error;
    }    
}
  

module.exports = {
    sum,
    send_welcome_note
};  