<template>
  <section class="anklet-action">
    <article class="anklet-action__wrapper">
      <div>
        <h2>Don't wanna stop here?</h2>
      </div>
      <div>
        <p>
          Let's work togather, and have fun.Let's work togather, and have
          fun.Let's work togather, and have fun.Let's work togather, and have
          fun.
        </p>
      </div>
      <div>
        <a href="mailto:shuyukao0@gmail.com" class="is-rounded"
          >Let's do this!</a
        >
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: "AnkletAction",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.anklet-action {
  margin-bottom: -80px;
  position: relative;
}
.anklet-action__wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-white);
  /* text-shadow: 0 0 var(--color-dark); */
  width: 80%;
  max-width: 1200px;
  padding: 50px;
  margin: 25px auto;
  border-radius: 25px;
  background: var(--color-primary-darkest);
  z-index: 10;
}
.anklet-action__wrapper h2 {
  margin: 25px auto;
}
.anklet-action__wrapper div {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0;
  display: flex;
  justify-content: center;
}
.anklet-action__wrapper div:not(:last-child) {
  margin-right: 25px;
}
a {
  float: right;
  border: 2px solid var(--color-primary-darker);
  padding: 10px 40px;
  margin: 25px auto;
  text-decoration: none;
  color: var(--color-white);
}
a:hover {
  transition: all 0.2s ease-in-out;
  background: var(--color-primary-darker);
  /* color: var(--color-primary-darkest); */
}
a:active {
  transition: all 0.1s ease-in-out;
  transform: translateY(1px);
  box-shadow: 2px 2px 0 0 var(--color-gray-darker);
}
.is-rounded {
  border-radius: 290486px;
}
@media screen and (max-width: 768px) {
  .anklet-action__wrapper {
    flex-direction: column;
    width: 60%;
  }
  .anklet-action__wrapper div {
    width: 80%;
  }
}
</style>
