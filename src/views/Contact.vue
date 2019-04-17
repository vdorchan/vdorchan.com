<template>
  <div>
    <form action="">
      <div class="row">
        <div class="field">
          <label for="">Name</label>
          <input
            type="text"
            class="control"
            v-model="_name"
          >
        </div>
        <div class="field">
          <label for="">Email</label>
          <input
            type="email"
            class="control"
            v-model="email"
          >
        </div>
      </div>
      <div class="row">
        <div class="field">
          <label for="">Message</label>
          <textarea
            class="control"
            v-model="message"
          ></textarea>
        </div>
      </div>
      <div class="row row-submit">
        <button
          class="control submit"
          @click="sendMail"
        >Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
// const { MAILGUN_API_KEY, MAILGUN_DOMAIN } = process.env
// import mailgunJs from 'mailgun-js'

export default {
  data () {
    return {
      _name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMail () {
      const { _name, email, message } = this
      const mailgun = mailgunJs({ apiKey: MAILGUN_API_KEY, domain: MAILGUN_DOMAIN })

      const data = {
        from: `vdorchan.com ${_name} <${email}>`,
        to,
        subject: 'contact from vdorchan.com',
        text: message
      }
      mailgun.messages().send(data, (error, body) => {
        console.log(body)
        if (!error) {
          alert('邮件发送成功')
        } else {
          alert('邮件发送失败，重新尝试或通过 vdorchan@gmail.com 联系我')
          console.log(error)
        }
      })
    }
  },
}
</script>

<style lang="scss" scoped>
form {
  padding: 0 20px;
  max-width: 700px;
  margin: 0 auto;
  font-size: rem(18);
  font-family: "eurostile", sans-serif;
}
.row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  &-submit {
    justify-content: center;
  }
}
.field {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 20px;
  width: 100%;
}
.control {
  width: 100%;
  margin-top: 10px;
  -webkit-appearance: none;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  line-height: 1.5;
  border-color: #e6ecf8;
  font-size: rem(18);
}
textarea {
  box-sizing: border-box;
  max-width: 100%;
  min-width: 100%;
  height: 200px;
}
input,
textarea {
  padding: 5px;
}
.submit {
  display: block;
  width: 33%;
  background-color: transparent;
  border-color: #8c43ff;
  border-width: 2px;
  color: #8c43ff;
  padding-left: 1em;
  padding-right: 1em;
  cursor: pointer;
}
</style>
