<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <div>
    <TheHeader></TheHeader>
    <BannerBlock></BannerBlock>
    <SpecialtyBlock></SpecialtyBlock>
    <MyWorkBlock></MyWorkBlock>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import BannerBlock from "./components/BannerBlock.vue";
import SpecialtyBlock from "./components/SpecialtyBlock.vue";
import MyWorkBlock from "./components/MyWorkBlock.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    BannerBlock,
    SpecialtyBlock,
    MyWorkBlock
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: "Segoe UI VSS (Regular)", "Segoe UI", "-apple-system",
    BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Ubuntu, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50;
  margin-top: 60px; */
}
:root {
  --color-white: #fff;
  --color-dark: #3b3b3b;
  --color-gray-darkest: #323233;
  --color-gray-darker: #606266;
  --color-gray-lightest: #f5f4f4;
  /* --color-blue-lightest: #f7fbff;
  --color-link-blue: #409eff;
  --color-link-blue-lighter: #66b1ff;
  --color-link-blue-darker: #3a8ee6; */

  --color-primary-light: #8fffda;
  --color-primary-base: #67e0b8;
  --color-primary-darker: #359474;
  --color-primary-base-15: rgba(103, 224, 184, 0.15);
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
  color: var(--color-dark);
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
  font-size: 52px;
  margin-bottom: 24px;
}

h2 {
  font-size: 22px;
  margin-bottom: 12px;
  line-height: 26px;
  font-weight: 600;
}

h3 {
  font-size: 18px;
  margin-bottom: 8px;
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
  font-size: 16px;
  margin-bottom: 16px;
}

h4,
ul {
  text-transform: uppercase;
}

img {
  height: auto;
  max-width: 100%;
}
.container {
  padding: 50px 50px;
  margin-bottom: 50px;
}
.row-maxwidth-1200{
  width: 95%;
  max-width: 1200px;
  margin: 0 auto;
}
.full-width{
  width:100%;
}
</style>
