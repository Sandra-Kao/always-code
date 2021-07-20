<template>
  <section class="my-work">
    <h2>My work</h2>
    <div
      class="my-work__blobk"
      v-for="type in workProjects"
      :key="type.project"
    >
      <h3>{{ type.project }}</h3>
      <div class="my-work__wrapper">
        <div class="my-work__card" v-for="work in type.works" :key="work.name">
          <a :href="work.link">
            <h4>{{ work.name }}</h4>
            <img :src="work.imgSrc" :alt="work.imgAlt" />
            <p>{{ work.description }}</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyWorkBlock",
  data() {
    return {
      workProjects: [
        {
          project: "Side projects on my own",
          works: [
            {
              name: "",
              link: "https://alwayscode.live/views/Index.html",
              imgSrc: "./assets/website-blog-post-vuejs.png",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "",
              link: "https://alwayscode.live/views/Index.html",
              imgSrc: "../assets/website-blog-post-vuejs.png",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "",
              link: "https://alwayscode.live/views/Index.html",
              imgSrc: "./assets/website-blog-post-vuejs.png",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            
          ],
        },
        {
          project: "With Company",
          works: [
            {
              name: "",
              link: "https://alwayscode.live/views/Index.html",
              imgSrc: "./assets/website-blog-post-vuejs.png",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "",
              link: "https://alwayscode.live/views/Index.html",
              imgSrc: "./assets/website-blog-post-vuejs.png",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "",
              link: "https://alwayscode.live/views/Index.html",
              imgSrc: "./assets/website-blog-post-vuejs.png",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            
          ],
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
