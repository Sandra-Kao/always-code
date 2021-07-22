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
          <h4>{{ work.name }}</h4>
          <a :href="work.link">
            <img :src="getImgUrl(work.imgFileName)" :alt="work.imgFileName" />
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
  methods: {
    getImgUrl(pet) {
      const images = require.context("./assets/", false, /\.png$/);
      return images("./" + pet + ".png");
    },
    getFilePath(fileName) {
      return "./assets/" + fileName;
    },
  },
  data() {
    return {
      publickPath: process.env.BASE_URL,
      workProjects: [
        {
          project: "Side projects on my own",
          works: [
            {
              name: "My Coding Blog",
              link: "https://alwayscode.live/views/Index.html",
              imgFileName: "website-blog-post-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "About Me - A Front-End Web Developer",
              link: "/",
              imgFileName: "website-blog-post-vuejs",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Monster Slayer",
              link: "https://codepen.io/K-SY/full/QWGzGeY",
              imgFileName: "codepen-vuejs-monster-slayering",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
          ],
        },
        {
          project: "Work With Company",
          works: [
            {
              name: "IoT Academy",
              link: "https://academy.advantech.com/en-us/courses",
              imgFileName: "website-academy",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Advantech CSR Portal",
              link: "https://csr.advantech.com/en-us",
              imgFileName: "website-corporate-social-responsibility-en",
              imgAlt: "",
              responsible: "I was responsible for",
              description:
                "I was responsible for. I introduced and implemented training programs to the company.",
            },
            {
              name: "Advantech Marketplace",
              link: "https://wise-paas.advantech.com/en-us/marketplace/product/advantech.webaccess-cnc",
              imgFileName: "website-marketplace-productpage",
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
.my-work__wrapper {
  display: flex;
}
.my-work__card img {
  width: 100px;
  height: 100px;
}
</style>
