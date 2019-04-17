<template>
  <div class="home">
    <article>
      <h1><span>vdorchan</span> / <span>Front-end Developer</span></h1>
      <nav>
        <a
          v-for="nav in navs"
          :href="nav.url"
          v-html="nav.label"
          :key="nav.url"
        ></a>
      </nav>
      <div class="introduce">
        <p>
          我是一个对 Web 开发由衷热爱的前端工程师，喜欢 JavaScript 和 JavaScript 全栈开发。除了能 JavaScript、CSS、HTML 进行页面开发之外，同样熟悉或了解 Vue.js、Node.js、Koa、MongoDB、Electron 等库和框架，以及 webpack、gulp等工具。有开发前端工具经验，可有效促进团队工作效率。对学习新东西有着极大的兴趣和热情，折腾是个人的信念。喜欢一股脑投入项目，完成一项项目可以带来极大的成就感。渴望一个合适的团队，为其倾注开发的热情，共同进步。
        </p>
        <p class="social-tips">你可以通过底部的社交方式联系到我。</p>
      </div>
    </article>
    <footer>
      <div class="motto">Stay Passionate at Work</div>
      <div class="social-icon-wrapper">
        <social-icon
          type="mail"
          url="mailto:vdorchan.com"
        ></social-icon>
        <social-icon
          type="github"
          url="https://github.com/vdorchan.com"
        ></social-icon>
        <social-icon
          type="wechat"
          url="13265026280"
        ></social-icon>
        <social-icon
          type="qq"
          url="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=273171724&website=www.oicqzone.com"
        ></social-icon>
      </div>
      <copyright></copyright>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import SocialIcon from '@/components/SocialIcon.vue'
import Copyright from '@/components/Copyright.vue'

export default {
  name: 'home',
  data () {
    return {
      navs: [
        { url: 'https://blog.vdorchan.com', label: '博客<br>Blog' },
        { url: 'https://resume.vdorchan.com', label: '简历<br>Resume' }/* ,
        { url: 'javascript:', label: '项目<br>Projects' } */
      ]
    }
  },
  components: {
    SocialIcon,
    Copyright
  }
}
</script>

<style lang="scss">
.home {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  font-size: rem(14);
}
article {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
}
h1 {
  // font-size: calc(34px + 4 * (100vw - 600px) / 400);;
  // font-size: rem(10);
  font-size: rem(35);
  padding-bottom: rem(10);
  text-align: center;
  span {
    white-space: nowrap;
  }
}
nav {
  display: flex;
  justify-content: center;
  padding-bottom: rem(15);
  font-size: rem(14);
  a {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    width: rem(80);
    height: rem(80);
    margin: 0 0.5em;
    border-radius: 50%;
    background: #8c43ff;
    color: #ffffff;
    text-decoration: none;
    transition: 0.2s all;
    box-shadow: 0 2px 3px 0px rgba(0, 0, 0, 0.25);
  }
  &:hover a {
    filter: blur(1px);
    opacity: 0.5;
    transform: scale(0.98);
    box-shadow: none;

    &:hover {
      transform: scale(1);
      filter: blur(0px);
      opacity: 1;
      box-shadow: 0 8px 20px 0px rgba(0, 0, 0, 0.125);
    }
  }
}
.introduce {
  padding: 0 rem(20);
  max-width: 500px;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
}
footer {
  display: flex;
  flex-direction: column;
  height: rem(150);
  align-items: center;
  justify-content: center;
  background: #8c43ff;
}
.social-icon-wrapper {
  display: flex;
  padding-bottom: rem(25);
  > a {
    margin: 0 rem(10);
  }
}
.social-tips {
  text-decoration: underline;
}
.motto {
  padding: rem(20) 0 rem(20);
  color: #ffffff;
  font-size: rem(18);
  opacity: 0.7;
}
</style>
