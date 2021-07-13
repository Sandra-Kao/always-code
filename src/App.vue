<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Header></Header>
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import Header from './components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    Header,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
:root {
  --color-white: #fff;
  --color-gray-darkest: #323233;
  --color-gray-darker: #606266;
  --color-gray-lightest: #f5f4f4;
  --color-blue-lightest: #f7fbff;
  --color-link-blue: #409eff;
  --color-link-blue-lighter: #66b1ff;
  --color-link-blue-darker: #3a8ee6;
}

* {
  margin: 0;
  padding: 0;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

html {
  /* font-size: 26px; */
}

h1:first-child,
h2:first-child,
h3:first-child,
h4:first-child,
h5:first-child,
h6:first-child {
  margin-top: 0;
}

h1 {
  max-width: 360px;
  font-size: 52px;
}

h2 {
  font-size: 22px;
  line-height: 26px;
  font-weight: 600;
}

h3 {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;
}

h4,
h5,
p,
span,
ul,
li,
a,
button {
  color: #222222;
  font-size: 16px;
}

h4,
ul {
  color: #222222;
  text-transform: uppercase;
  font-size: 16px;
}
</style>
