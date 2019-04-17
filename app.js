const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env;

console.log(MAILGUN_API_KEY, MAILGUN_DOMAIN);

(async function () {
  
  const { name, email, message } = {
    name:'testvdor',
    email:'haha@xiao.com',
    message:'yohehe'
  }
  const mailgun = require('mailgun-js')({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })
  
  const data = {
    from: `${name} in website vdorchan.com <${email}>`,
    to: 'vdorchan@gmail.com',
    subject: `${name} sent message from website vdorchan.com`,
    text: message
  }
  
  const send = function (data) {
    return new Promise((resolve, reject) => {
      mailgun.messages().send(data, (error, body) => error ? reject(error) : resolve(body))
    })
  }
  
  const res =  await send(data)
  
  console.log(res);
})()
