const axios = require("axios");
var debug = require('debug')('girlfriday:server');

/** main configration for this lib */
const bottoken = process.env.TELBOT_TOKEN; //tookan API key from the tookan setting panel

/**send message to a developer for any thing goes wrong! or may be log like that
 * 
 * Balaji ID is 344803343
 */
let notify_monkey = async (to, message) => {
    console.log(bottoken)
    debug('tele bot token: '+ bottoken);
    let let_url = `https://api.telegram.org/bot${bottoken}/sendMessage`;
    try {
        let options = {
            method: 'post',
            url: let_url,
            data: {
                "chat_id": to,
                "text": message
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }
        let res = await axios(options);
        if (res.status == 200) {
            debug('tele bot response sent');
            return res.data;
        } else {
            debug('tele bot response not sent');
            return false;
        }
    } catch (error) {
        debug('tele bot exception');
        throw error;
    }
};

module.exports = {
    notify_monkey,
}
