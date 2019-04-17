const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env

module.exports = async function(ctx) {
  const { name, email, message } = ctx.request.body
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
  
  try {
    await send(data)
    ctx.body = {
      success: true,
      msg: '发送成功'
    }
  } catch (error) {
    ctx.body = {
      success: false,
      msg: error.message
    }
  }

}
