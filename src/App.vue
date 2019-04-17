<template>
  <div id="app">
    <header>
      <a
        href="vdorchan.com"
        class="logo"
      >
        <img src="@/assets/images/logo.png">
      </a>
      <router-link
        class="contact"
        to="contact"
      >联系我</router-link>
    </header>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import "./assets/css/reset.css";
* {
  padding: 0;
  margin: 0;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
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
