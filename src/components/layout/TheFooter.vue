<template>
  <footer class="">
    <img
      src="./assets/S_logo_64_white.png"
      alt="Sandra Logo"
      class="header-logo"
    />
    <h3>Program our code, and build our life.</h3>
    <h3>Set-up your target and go for it!</h3>
    <h3>Run, run, Sandra RUN!</h3>

    <div class="social-field">
      <a class="button" href="https://github.com/Sandra-Kao" target="_blank">
        <span class="is-small absolute-center">
          <i class="fab fa-github absolute-center"></i>
        </span>
      </a>

      <a
        class="button"
        href="https://codepen.io/your-work?sort_by=updated_at&grid_type=grid"
        target="_blank"
      >
        <span class="is-small absolute-center">
          <i class="fab fa-codepen absolute-center"></i>
        </span>
      </a>

      <a class="button" href="mailto:shuyukao0@gmail.com" target="_blank">
        <span class="is-small absolute-center">
          <i class="far fa-envelope absolute-center"></i>
        </span>
      </a>

      <a class="button" href="tell:+886-933-374-988" target="_blank">
        <span class="is-small absolute-center">
          <i class="fas fa-phone-volume absolute-center"></i>
        </span>
      </a>
    </div>

    <p class="handcrafted">
      Since 2020 - {{ new Date().getFullYear() }}. Handcrafted by me. © Snndra
      Kao
    </p>
    <div class="made-by">
      This website is made by:
      <i class="fab fa-vuejs"></i>
      <i class="fab fa-npm"></i>
      <i class="fab fa-figma"></i>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  padding: 50px;
  padding-top: 110px;
  color: white;
  text-align: center;
  background: var(--color-primary-darker);
}
footer img {
  margin-bottom: 50px;
}
/* .footer-wrapper {
  display: flex;
} */
.social-field {
  display: flex;
  justify-content: center;
  margin: 50px auto;
}

a.button {
  display: flex;
  position: relative;
  font-weight: 400;
  height: 40px;
  width: 40px;
  margin: 0 0.2rem;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  background-color: transparent;
  transition: all 0.2s ease-in-out;
  -webkit-transition: all 0.2s ease-in-out;
}
a.button:hover {
  background: white;
  border: 2px solid white;
}
a.button:hover svg {
  color: var(--color-primary-darker);
}

.is-small {
  width: 15px;
  height: 15px;
}

svg {
  font-size: 22px;
  color: white;
  margin-right: 5px;
}
</style>
