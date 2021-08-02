<template>
  <section class="banner-block">
    <div class="container">
      <h1>Front-end Developer</h1>
      <h3>
        I love to write elegant and alive programs. My code has to be
        efficiency, clean and understandable.
      </h3>
      <article class="banner-block__person-wrapper">
        <img
          src="./assets/head-emoji.png"
          alt="head-emoji"
          class="banner-block__person-img"
        />
      </article>
    </div>
  </section>
</template>

<script>
export default { name: "BannerBlock" };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banner-block__person-wrapper {
  width: 210px;
  margin: 64px auto;
  border: 1px solid transparent;
  border-radius: 100px;
  background: var(--color-primary-base-15);
}
.banner-block__person-img {
}

@media screen and (max-width: 500px) {
  /* h1 {
    font-size: 36px;
  } */
}
</style>
