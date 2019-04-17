<template>
  <div id="app">
    <header>
      <a
        href="https://vdorchan.com"
        class="logo"
      >
        <img src="@/assets/images/logo.png">
      </a>
      <nuxt-link
        class="contact"
        to="contact"
      >联系我</nuxt-link>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import "../assets/css/reset.css";

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
/* html根元素大小
---------------------------------------- */
html {
  font-size: ($vm_fontsize / ($vm_design / 2)) * 100vw;

  @media screen and (max-width: 320px) {
    font-size: 64px;
  }
  @media screen and (min-width: 540px) {
    font-size: 108px;
  }
}

// body 也增加最大最小宽度限制，避免默认100%宽度的 block 元素跟随 body 而过大过小
body {
  min-width: 320px;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: rem(30) 0 rem(20);
  width: 90vw;
  max-width: 1000px;
  margin: 0 auto;
}
.logo {
  display: block;
  width: rem(40);
  img {
    display: block;
    width: 100%;
  }
}
.contact {
  display: block;
  font-weight: 400;
  font-size: 18px;
  padding: 10px 40px;
  background-color: transparent;
  color: #8c43ff;
  border-radius: 30px;
  border: 2px solid #8c43ff;
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    background: #8c43ff;
    color: #ffffff;
  }
}
</style>
