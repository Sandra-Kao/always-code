<template>
  <header  class="row-maxwidth-1200">
      <img
        src="./assets/S_logo_64_lightgreen.png"
        alt="Sandra Logo"
        class="header-logo"
      />
      <a href="mailto:shuyukao0@gmail.com" class="is-rounded">Say Hi ! </a>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding: 25px 50px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
header .header-logo {
  float: left;
}
header a {
  float: right;
  border: 1px solid var(--color-primary-darker);
  padding: 10px 20px;
  margin: 0;
  text-decoration: none;
  color: var(--color-primary-darker);
}
header a:hover {
  transition: all 0.2s ease-in-out;
  background: var(--color-primary-darker);
  color: var(--color-white);
}
header a:active {
  transition: all 0.1s ease-in-out;
  transform: translateY(1px);
  box-shadow: 2px 2px 0 0 var(--color-primary-base);
}
.is-rounded {
  border-radius: 290486px;
}
@media screen and (max-width: 500px) {
  header{
    margin: 0;
  }
}
</style>
